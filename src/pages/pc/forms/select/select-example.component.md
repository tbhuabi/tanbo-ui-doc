<h2 uiAnchor id="ui-select-组件">ui-select 组件</h2>

<h3 uiAnchor id="ui-select-输入属性">输入属性</h3>

| 属性名             | 类型  | 默认值 |说明    |
| --                    | --        | --        | --    |
| `placeholder`         | `string`  |           | 设置当未选中任何选项时，组件的提示文字     |
| `name`                | `string`  |           | 设置组件的 name     |
| `arrowIconClassName`  | `string`  |           | 控制下箭头的 css class |
| `disabled`            | `boolean` | false     | 设置组件是否禁用     |
| `readonly`            | `boolean` | false     | 设置组件是否只读     |
| `multiple`            | `boolean` | false     | 是否开启多选功能     |
| `selectedIndex`       | `number`  | 0         | 设置默认选中项     |
| `size`                | `string`  |           | 组件大小，可选`lg`、`sm` |
| `forId`               | `string`  |           | 用于 label 标签的 for 属性指定的 id，当 label 被点击时，可选中当前的组件  |

<h3 uiAnchor id="ui-select-输出事件">输出事件</h3>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiChange`| 用户改变选中项时触发 |`string`  | 当选中某一项后的回调 |

<h2 uiAnchor id="ui-option-组件">ui-option 组件</h2>

<h3 uiAnchor id="ui-option-输入属性">输入属性</h3>

| 属性名     | 类型  | 默认值 | 说明    |
| --            | --            | --        | --        |
| `disabled`    | `boolean`     | false     | 设置当前选项是否禁用     |
| `selected`    | `boolean`     | false     | 设置是否默认选中当前项   |
| `value`       | `string`      |           | 设置当前选项的 value  |

<h3 uiAnchor id="ui-option-输出事件">输出事件</h3>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiChecked`   | 用户选中当前项时触发 |`string`   | 当前组件的 value |
