<h2 uiAnchor id="ui-segment-组件">ui-segment 组件</h2>

<h3 uiAnchor id="ui-segment-输入属性">输入属性</h3>

| 属性名             | 类型  | 默认值 |说明    |
| --                    | --        | --        | --    |
| `selectedIndex`       | `number`  | 0         | 设置默认选中项     |

<h3 uiAnchor id="ui-segment-输出事件">输出事件</h3>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiChange`| 用户改变选中项时触发 |`string`  | 当选中某一项后的回调 |

<h2 uiAnchor id="ui-segment-button-组件">ui-segment-button 组件</h2>

<h3 uiAnchor id="ui-segment-button-输入属性">输入属性</h3>

| 属性名     | 类型  | 默认值 | 说明    |
| --            | --            | --        | --        |
| `disabled`    | `boolean`     | false     | 设置当前选项是否禁用     |
| `selected`    | `boolean`     | false     | 设置是否默认选中当前项   |
| `value`       | `string`      |           | 设置当前选项的 value  |

<h3 uiAnchor id="ui-segment-option-输出事件">输出事件</h3>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiChecked`   | 用户选中当前项时触发 |`string`   | 当前组件的 value |
