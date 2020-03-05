<h2 uiAnchor id="输入属性">输入属性</h2>

| 属性名         | 类型      | 默认值       | 说明    |
| --                | --            | --        |--        |
| `value`           | `string`  |               | 设置组件的 value         |
| `name`            | `string`  |               | 设置组件的 name         |
| `disabled`        | `boolean` | false         | 组件是否禁用         |
| `readonly`        | `boolean` | false         | 组件是否只读         |
| `checked`         | `boolean` | false         | 设置组件选中状态         |
| `forId`           | `string`  |           |用于 label 标签的 for 属性指定的 id，当 label 被点击时，可选中当前的组件  |
| `checkedIcon`     | `string`  | ui-icon-radio-checked |在选中时候的 icon |
| `uncheckedIcon`   | `string`  | ui-icon-radio-unchecked   | 在未选中时候的 icon |

<h2 uiAnchor id="输出事件">输出事件</h2>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiChange`| 用户组件选中状态时触发|`string`   | 当前组件的value |
