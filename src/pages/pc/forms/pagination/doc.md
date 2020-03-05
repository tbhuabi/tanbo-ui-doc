<h2 uiAnchor id="输入属性">输入属性</h2>

| 属性名 | 类型  | 默认值 | 说明    |
| --            | --        | --        | --        |
| `currentPage` | `number`  | 1         | 当前是第几页 |
| `pages`       | `number`  | 1         | 总共有多少页（与 rows、pageSize 参数冲突） |
| `rows`        | `number`  | 1         | 总条数（与 pages 参数冲突） |
| `pageSize`    | `number`  | 10        | 每页多少条（与 pages 参数冲突） |
| `btnCount`    | `number`  | 8         | 按扭个数 |
| `size`        | `string`  |           | 组件按扭大小，可选`lg`、`sm` |

<h2 uiAnchor id="输出事件">输出事件</h2>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiChange` | 用户点击新页码时触发 |`number`   | 当前用户选中第几页 |
