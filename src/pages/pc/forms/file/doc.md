<h2 uiAnchor id="输入属性">输入属性</h2>

| 属性名     | 类型      | 默认值 | 说明    |
| --            | --            | --        |--     |
| `placeholder` | `string`      |           |上传组件的提示文字 |
| `ext`         | `string \| RegExp \| Array<string \| RegExp> `   | |上传的文件类型，如： `jpg`，`png`，`txt`      |
| `name`        | `string`      |           |表单组件的name  |
| `forId`       | `string`      |           |用于 label 标签的 for 属性指定的 id，当 label 被点击时，可选中当前的组件  |
| `uploader`    | `(data: FormData) => (HttpRequest<any> \| Observable<HttpEvent<any>>)`    | |提供上传服务的回调  |
| `multiple`    | `boolean`     | false | 是否可以上传多个文件  |

<h2 uiAnchor id="输出事件">输出事件</h2>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiChange`        | 当用户选中文件时触发 |`Event`       | 事件触发时的 Event 对象 |
| `uiUploadStart`   | 文件开始上传时触发 |`void`        |  |
| `uiUploading`     | 文件上传进度变化时触发 |`number`      | 当前上传进度 |
| `uiUploaded`      | 文件上传完成时触发 |`any`         | 服务端返回的结果 |
| `uiUploadError`   | 文件上传发生错误时触发 |`Error`        | 当前错误的实例 |
