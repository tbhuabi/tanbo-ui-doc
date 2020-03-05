<h2 uiAnchor id="输入属性">输入属性</h2>

| 属性名          | 类型      | 默认值  | 说明               |
| --                    | --        | --                | --                        |
| `value`               | `string \| number \| Date`|  |设置组件的 value，需和 `displayFormat` 字段格式匹配，否则会解析错误。如果传入类型为 `number`，则当成时间戳。                 |
| `name`                | `string`  |               |设置组件的 name                |   
| `size`                | `string`  |               |组件大小，可选`lg`、`sm` |
| `forId`               | `string`  |               |用于 label 标签的for属性指定的id，当label被点击时，可选中当前的input  |
| `placeholder`         | `string`  |               |设置当组件 value 为空时显示的提示文字                 |
| `arrowIconClassName`  | `string`  |               |控制下箭头的 css class |
| `format`              | `string`  | yyyy-MM-dd    |当传入 `''` 字符串的时，输出为时间戳 |
| `displayFormat`       | `string`  |               |显示在输入框中的格式，当不传时，以 `format` 为准 |
| `disabled`            | `boolean` | false         |设置组件是否禁用                  |
| `readonly`            | `boolean` | false         |设置组件是否只读                  |
| `maxDate`             | `string \| number \| Date`  |               |最大日期，以年月日 时分秒的字符串传入，如2014-12-02、2103/03/23 09:34:09，如果传入类型为 `number`，则当成时间戳。 |
| `minDate`             | `string \| number \| Date`  |               |最小日期，以年月日 时分秒的字符串传入，如2014-12-02、2103/03/23 09:34:09，如果传入类型为 `number`，则当成时间戳。 |
| `maxTime`             | `string`  | 24:00:00      |最大时间，以时分秒的字符串传入，如09:34:09 |
| `minTime`             | `string`  | 00:00:00      |最小时间，以时分秒的字符串传入，如09:34:09 |

<h2 uiAnchor id="输出事件">输出事件</h2>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiChange`     | 用户改变组件选中结果时触发 | `number`  | 当前组件的 value |
