<h2 uiAnchor id="输入属性">输入属性</h2>

| 属性名     | 类型      | 默认值 |说明    |
| --            | --            | --            |--     |
| `value`       | `string`      |               |       |
| `name`        | `string`      |               |       |
| `forId`       | `string`      |               |用于 label 标签的 for 属性指定的 id，当 label 被点击时，可选中当前的组件  |
| `uploader`| `(type: stirng) => (string \| Promise<string> \| Observable<string>)`      |              | 根据不同的 type，自定义上传，并返回资源 url  |

<h2 uiAnchor id="输出事件">输出事件</h2>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiChange` | 用户更新当前组件内容时触发 |   | 编辑器当前的内容和样式表 |
