<h2 uiAnchor id="输入属性">输入属性</h2>

| 属性名             | 类型      | 默认值 | 说明    |
| --                    | --            | --        |--            |
| `options`             | `PickerCell[]`|           | 组件的可选项 |
| `value`               | `PickerCell[]`|           | 默认选中项 |
| `size`                | `string`      |           | 组件大小，可选`lg`、`sm` |
| `forId`               | `string`      |           | 用于 label 标签的 for 属性指定的 id，当 label 被点击时，可选中当前的组件  |
| `name`                | `string`      |           |       |
| `placeholder`         | `string`      |           |       |
| `arrowIconClassName`  | `string`      | ui-caret  | 控制下箭头的 css class |
| `displayFormat`       | `string`      | /         | 控制选中项的连接字符 |
| `disabled`            | `boolean`     | false     |       |
| `readonly`            | `boolean`     | false     |       |
| `dataProvide`         | `(cell: PickerCell) => (PickerCell[] \| Promise<PickerCell[]> \| Observable<PickerCell[]>)`    | |实现异步加载数据的回调方法 |

<h2 uiAnchor id="输出事件">输出事件</h2>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiItemChecked`   | 当某一项选中时触发 |`PickerCell`      | 当前选中项 |
| `uiChange`        | 当组件选中完成时触发 |`PickerCell[]`    | 所有选中项 |
