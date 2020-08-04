<h1 id="自定义格式" uiAnchor>自定义格式</h1>

在 TextBus 中扩展格式是很简单的事情，只需要继承 Formatter 类，并完成抽象方法，即可扩展任意样式。我们以给文字加颜色为例，实现一个自定义的 Formatter。

<h2 id="创建-ColorFormatter-类" uiAnchor>创建 ColorFormatter 类</h2>

```typescript
// # color.formatter.ts
import {
  InlineFormatter,
  FormatEffect,
  FormatAbstractData,
  VElement,
  ChildSlotModel,
  ReplaceModel,
  FormatterPriority
} from '@tanbo/textbus';

/**
 * 创建新的字体颜色类
 */
class ColorFormatter extends InlineFormatter {
  /**
   * 通过父类设置匹配规则和渲染优先级。
   * 这里我们要匹配 style 的 color 的值，由于颜色值是不固定的，所以我们用正则去匹配。
   * 字体颜色是行内样式，所以我们设置渲染优先级为 FormatterPriority.InlineStyle。
   */
  constructor() {
    super({
      styles: {
        color: /.+/
      }
    }, FormatterPriority.InlineStyle);
  }

  /**
   * 当 TextBus 初始化时，如果某个节点通过了 Formatter 的规则匹配，则会调用 read 方法。
   * read 方法返回一个记录了当前样式的抽象数据，用于后面的修改和渲染。
   *
   * @param node Formatter 匹配通过的节点
   */
  read(node: HTMLElement): FormatAbstractData {
    return new FormatAbstractData({
      style: {
        name: 'color',
        value: node.style.color
      }
    });
  }

  /**
   * 当 TextBus 渲染样式时，会调用 Formatter 类 render 方法，并根据 render 方法返回的渲染模式，处理虚拟 DOM 结构。
   *
   * @param isProduction  是否是输出模式，有些情况下，编辑模式和输出模式渲染的结果是需要不一样的。
   *                      如在编辑状态下，可能会添加一些临时的属性来做交互，或者兼听一些事件等等，这在输出结果时，是不需要的。
   * @param state         当前样式的状态，一般来说有两种，生效的（Valid）和不生效的（Invalid），但有些情况下，可能还有其它状态。
   *                      如：继承（Inherit）、排除（Exclude）。
   *                      如果当前是状态是 Invalid，是不会调用 render 方法的，只有是其它三种中的一种才会调用。
   *                      Formatter 在渲染的时候，可以根据不同的状态来渲染出不同的结果。
   * @param abstractData  渲染时需要的抽象数据，当外部改变了部分样式时，修改后的值都会保存在抽象的数据中。
   * @param existingElement 是否已有同级元素。如：当两个样式的范围是一样的，其中一个样式先渲染时，第二个样式渲染时，则会拿到第一个样式渲染后的元素。
   * @return              ReplaceModel | ChildSlotModel | null
   *                      ReplaceModel: 替换模式———用新渲染出的元素替换已渲染出的同级元素；
   *                      ChildSlotModel: 如果已有渲染出的元素，则把当前元素作为子元素，否则，直接使用当前元素；
   *                      null: 如果已有渲染出的元素，则使用渲染出的元素，否则创建一个虚拟节点
   */
  render(isProduction: boolean, state: FormatEffect, abstractData: FormatAbstractData, existingElement?: VElement): ReplaceModel | ChildSlotModel | null {
    let flag = true;
    if (!existingElement) {
      existingElement = new VElement('span');
      flag = false;
    }
    existingElement.styles.set(abstractData.style.name, abstractData.style.value);
    if (flag) {
      return new ReplaceModel(existingElement);
    }
    return new ChildSlotModel(existingElement);
  }
}

export const colorFormatter = new ColorFormatter();
```
当创建完成 ColorFormatter 类时，其实我们已经完成了 99% 的工作，只需要实例化后，添加在 TextBus 的配置项即可。但常见情况下，我们还需要一个操作命令，让用户可以通过一些交互，让其可以实时修改文档中的格式。

下面，我们再创建一个命令工具。

<h2 id="创建-Commander-操作命令" uiAnchor>创建 Commander 操作命令</h2>


```typescript
// # color.commander.ts

import { Commander, FormatAbstractData, FormatEffect, TBSelection } from '@tanbo/textbus';
import { colorFormatter } from './color.formatter';

/**
 * 创建字体颜色操作命令工具
 */
class ColorCommander implements Commander<string> {
  /**
   * 当执行命令时，是否记录历史
   */
  recordHistory = true;

  /**
   * 根据用户选区，执行操作，让新颜色生效
   *
   * @param selection 选区对象
   * @param color 要应用的颜色
   */
  command(selection: TBSelection, color: string) {
    selection.ranges.forEach(range => {
      // 获取选区内所有已选择的范围
      range.getSelectedScope().forEach(item => {
        // 给每一段选中的内容应用样式
        item.fragment.apply(colorFormatter, {
         // 如果当前有颜色，则让颜色生效，否则不生效
          state: color ? FormatEffect.Valid : FormatEffect.Invalid,
          startIndex: item.startIndex,
          endIndex: item.endIndex,
          abstractData: new FormatAbstractData({
            style: {
              name: 'color',
              value: color
            }
          })
        });
      });
    });
  }
}
```

当操作命令创建完成后，我们还需要在用户界面上创建一个控件，让用户可以操作。下面我们来创建一个选择颜色的工具。

<h2 id="创建工具条工具" uiAnchor>创建工具条工具</h2>

```typescript
// # color.tool.ts
import { Toolkit, FormatAbstractData, FormatMatcher } from '@tanbo/textbus';
import { colorFormatter } from './color.formatter';

import { ColorCommander } from './color.commander';

export const colorTool = Toolkit.makeSelectTool({
  options: [{
    label: '红色',
    value: '#f00'
  }, {
    label: '绿色',
    value: '#0f0'
  }, {
    label: '蓝色',
    value: '#00f'
  }, {
    label: '黑色',
    value: '#000',
    default: true
  }],
  matcher: new FormatMatcher(colorFormatter),
  highlight(options, data) {
    if (data instanceof FormatAbstractData) {
      for (const option of options) {
        if (option.value === data.style.value) {
          return option;
        }
      }
    }
  },
  commanderFactory() {
    return new ColorCommander();
  }
});
```

至此，我们的准备工作就全部做完了，把 colorFormatter 和 colorTool 配置到 TextBus 的选项里，即可看到新开发的功能了。

<h2 id="配置-TextBus，让新格式生效" uiAnchor>配置 TextBus，让新格式生效</h2>

```typescript
import { createEditor, defaultOptions } from '@tanbo/textbus';

import { colorTool } from './color.tool';
import { colorFormatter } from './color.formatter';

defaultOptions.formatters.push(colorFormatter);
defaultOptions.toolbar.push(colorTool);

const editor = createEditor('#editor');

```
