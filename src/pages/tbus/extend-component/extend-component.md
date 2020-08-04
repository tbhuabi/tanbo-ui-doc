```typescript
// # div.component.ts
import { VElement, DivisionComponent, EventType, breakingLine, ComponentReader, ViewData } from '@tanbo/textbus';

/**
 * 创建 Div 组件，并继承 DivisionComponent，表示这是一个只有一个子插槽的组件。
 */
export class DivComponent extends DivisionComponent {
  private vEle: VElement;

  constructor() {
    super('div');
  }

  /**
   * 获取当前组件渲染后的子插槽元素。
   */
  getSlotView(): VElement {
    return this.vEle;
  }

  /**
   * 克隆一个副本。
   */
  clone() {
    const component = new DivComponent();
    component.slot.from(this.slot.clone());
    return component;
  }

  /**
   * 渲染方法，根据不同条件渲染当前组件的虚拟 DOM。
   * @param isProduction 是否是输入模式。
   */
  render(isProduction: boolean) {
    // 创建虚拟 DOM
    const block = new VElement(this.tagName);
    // 因为当前组件只有一层结构，且自已本身的内容就是可编辑的内容，所以把 block 赋值到 vEle，
    // 当 TextBus 通过 getSlotView 方法获取子插槽时，返回 block，TextBus 就会知道把后续的子内容，插入到 block 里。
    this.vEle = block;

    if (!isProduction) {
      // 如果不是输出模式，则订阅事件
      block.events.subscribe(event => {
        // 当用户敲击回车时，新创建一个段落，并把光标设置到新段落的第一个可放置的位置，
        // 同时取消冒泡，以阻止外层组件再次处理回车事件。
        if (event.type === EventType.onEnter) {
          const parent = event.renderer.getParentFragment(this);

          // 创建一个新的 Div 组件
          const component = new DivComponent();
          const firstRange = event.selection.firstRange;
          // 把光标后的内容取出，并插入到新的 component 内。
          const next = breakingLine(firstRange.startFragment, firstRange.startIndex);
          component.slot.from(next);

          // 通过父 fragment，插入新组件到后面
          parent.insertAfter(component, this);

          // 找到第一个可放置光标的位置
          const position = firstRange.findFirstPosition(component.slot);

          // 放置光标
          firstRange.startFragment = firstRange.endFragment = position.fragment;
          firstRange.startIndex = firstRange.endIndex = position.index;
          // 阻止冒泡
          event.stopPropagation();
        }
      });
    }

    return block;
  }
}

```

组件类创建完成了，但是还没有什么方法让新的组件生效，我们需要一个 Commander 类，让用户可以把新组件应用到编辑内容中。

<h2 uiAnchor id="创建-Commander-类">创建 Commander 类</h2>

```typescript
// # div.commander.ts
import { BrComponent, Commander, Renderer, TBSelection } from '@tanbo/textbus';
import { DivComponent } from './div.component';

/**
 * 创建 Commander 类
 */
export class DivCommander implements Commander {
  /**
   * 每次操作是否保存历史记录
   */
  recordHistory = true;

  /**
   * 给 TextBus 应用样式的方法。
   * @param selection 当前的选区对象。
   * @param params    应用当前命令所需要的值，这里不需要，我们忽略就好。
   * @param overlap   当前选区是否和 Matcher （Matcher 由工具栏配置，一般用于查询当前组件或样式，
   *                  是否和选区完全重叠）指定的规则匹配，部分组件或样式可能需根据这个状态来做操作，
   *                  我们这里暂不需要。
   * @param renderer  TextBus 的渲染工具类，可以查询当前状态下，Component、VDom、Fragment、原生 DOM 节点的关系。
   */
  command(selection: TBSelection, params: any, overlap: boolean, renderer: Renderer) {
    selection.ranges.forEach(range => {
      // 创建一个新的组件
      const component = new DivComponent();
      // 为了让组件内部能够有高度，且让光标可以放置以组件内，我们往内添加一个 br 组件。
      component.slot.append(new BrComponent());

      // 通过 Renderer 获取上层的组件和可编辑片段。
      const parentComponent = renderer.getParentComponent(range.endFragment);
      const parentFragment = renderer.getParentFragment(parentComponent);

      // 把新的组件添加到当前父组件之后
      parentFragment.insertAfter(component, parentComponent);

      // 把光标设置到新组件内
      range.setStart(component.slot, 0);
      range.collapse();
    })
  }
}

```

现在我们的组件和命令工具都已开发完毕，我们还需要一个工具去把组件和命令有机结合起来，才能让它们正常工作。

<h2 uiAnchor id="创建工具条工具">创建工具条工具</h2>

```typescript
// # div.tool.ts
import { Toolkit } from '@tanbo/textbus';
import { DivCommander } from './div.commander';

export const divTool = Toolkit.makeButtonTool({
  label: 'div 组件',
  commanderFactory() {
    return new DivCommander()
  }
})
```
最后，我们把新创建的工具添加到 TextBus 中。

<h2 uiAnchor id="把新工具配置-TextBus-中">把新工具配置 TextBus 中</h2>

```typescript
import { createEditor, defaultOptions } from '@tanbo/textbus';

import { divTool } from './div.tool';

defaultOptions.toolbar.push(divTool);

const editor = createEditor('#editor');

```

至此，我们添加新组件的功能就算全做完了，当在工具条点击 "div 组件" 按钮时，TextBus 会创建一个新的 div 组件，并插入在当前组件后面，且把光标移入到了新组件内。但这里还有一个问题，当 TextBus 初始化时，一般用户传入一段 HTML 内容，我们当前的开发的组件，只能添加，而不能把用户传入的 HTML 解析成对应的组件。所以我们还需要做一件事情，就是让 TextBus 有能力知道，当用户传入的 HTML 中，有 `div` 标签时，会自动将 `div` 标签识别成我们新开发的 `DivComponent`。

其实，这并不是什么难事，下面我们来写一个组件解析器吧！

<h2 uiAnchor id="组件解析器">组件解析器</h2>

我们在已有的 div.component.ts 文件中添加解析器的内容。

```typescript
// # div.component.ts
import { VElement, DivisionComponent, EventType, breakingLine, ComponentReader, ViewData } from '@tanbo/textbus';

/**
 * 创建 Div 组件，并继承 DivisionComponent，表示这是一个只有一个子插槽的组件。
 */
export class DivComponent extends DivisionComponent {...}

// =================== Div 解析器 ======================
/**
 * 创建 div 组件解析器
 */
export class DivComponentReader implements ComponentReader {
  /**
   * 匹配当前 HTML 元素是否为 Div 组件，当结果为 true 时，TextBus 将会调用 from 方法。
   * @param element
   */
  match(element: HTMLElement): boolean {
    return element.tagName.toLowerCase() === 'div';
  }

  /**
   * 根据 HTML 元素，返回一个新的 TextBus 组件，及其子插槽和子插槽内容对应的 HTML 容器。
   * 这里，我们的 div 组件本身就是子插槽内容的容器，所以我们直接返回了当前的 element。
   * @param element
   */
  from(element: HTMLElement): ViewData {
    const component = new DivComponent();
    return {
      component: component,
      slotsMap: [{
        from: element,
        toSlot: component.slot
      }]
    };
  }
}
```

现在，我们再次配置 TextBus，把我们新开发的 div 解析器添加在 TextBus 的配置项中。

```typescript
import { createEditor, defaultOptions } from '@tanbo/textbus';

import { DivComponentReader } from './div.component';
import { divTool } from './div.tool';

defaultOptions.componentReaders.unshift(DivComponentReader);
defaultOptions.toolbar.push(divTool);

const editor = createEditor('#editor');
```

