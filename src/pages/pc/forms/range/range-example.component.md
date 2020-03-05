<h2 uiAnchor id="输入属性">输入属性</h2>

| 属性名     | 类型      | 默认值 | 说明    |
| --            | --            | --    | --        |
| `value`       | `string`      |       | 设置组件的 value |
| `name`        | `string`      |       | 设置组件的 name |
| `disabled`    | `boolean`     | false | 设置组件是否禁用 |
| `readonly`    | `boolean`     | false | 设置组件是否只读 |
| `max`         | `number`      | 100   | 设置组件最大可选值 |
| `min`         | `number`      | 0     | 设置组件最小可选值 |
| `step`        | `number`      | 1     | 设置组件步长 |
| `showProgress`| `boolean`     | true  | 组件拖动时，是否在组件上方自动显示 value |

<h2 uiAnchor id="输出事件">输出事件</h2>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiChange`| 用户改变组件 `value` 时触发 | `number`  | 当前组件的 value |
