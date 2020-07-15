<h2 uiAnchor id="ui-dropdown">ui-dropdown</h2>
<h4 uiAnchor id="ui-dropdown-输入属性">输入属性</h4>

| 属性名     | 类型      | 默认值 |说明    |
| --            | --            | -- | --     |
| `autoDisplay` | `boolean`      | true     |是否自动隐藏下拉框，默认为 `true`     |
| `open`        | `boolean`      | false    |控制是否显示下拉框，当 `autoDisplay` 为 `true`时，不需要控制       |

<h4 uiAnchor id="ui-dropdown-输出事件">输出事件</h4>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiEscape` | 当组件失去焦点时触发 |`void`   |  |

<h2 uiAnchor id="ui-dropdown-input">ui-dropdown-input</h2>

一般用于组合下拉选项的输入框，组件为只读状态，只能通过程序修改 value

<div class="ui-alert">
<strong class="ui-color-danger">注意：</strong>如果和 <code>ui-dropdown</code> 组件组合使用时，<code>ui-dropdown-input</code> 组件会继承 <code>ui-dropdown</code> 组件的 <code>open</code>、<code>focus</code> 状态
</div>

<h4 uiAnchor id="ui-dropdown-input-输入属性">输入属性</h4>

| 属性名         | 类型      | 默认值 |说明    |
| --                | --           | -- |--     |
| `open`            | `boolean`    | false |组件展开状态     |
| `focus`           | `boolean`    | false |是否为获取焦点状态     |
| `value`           | `string`     |  |组件的 value     |
| `forId`           | `string`     |  |用于 label 标签的for属性指定的id，当label被点击时，可选中当前的input    |
| `name`            | `string`     |  |组件的 name |
| `placeholder`     | `string`     |  |组件的提示文字 |
| `arrowIconClassName`       | `string`      | 通过 `UI_DROPDOWN_ARROW_CLASSNAME` token 注入 |组件下拉箭头的 css class |


<h4 uiAnchor id="ui-dropdown-input-输出事件">输出事件</h4>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiClean`  | 当用户点击清除按钮时触发 |`void`   |  |

<h2 uiAnchor id="ui-dropdown-menu">ui-dropdown-menu</h2>
<h4 uiAnchor id="ui-dropdown-menu-输入属性">输入属性</h4>

| 属性名     | 类型      | 默认值 |说明    |
| --            | --            | -- | --     |
| `displayLimit` | `DropdownDisplayLimit`      |      | 控制下拉框宽度。可选值为：`minWidth`、`maxWidth`、`width`。三个值行为如下：<br>`minWidth`——下拉框最小宽度为 `ui-dropdown` 的宽度；<br>`maxWidth`——下拉框最大宽度为 `ui-dropdown` 的宽度； <br>`width`——下拉框宽度为 `ui-dropdown` 的宽度；    |
