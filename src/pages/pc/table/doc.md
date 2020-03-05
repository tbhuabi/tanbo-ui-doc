<h3 uiAnchor id="uiTable">uiTable</h3>
标记当前表格有全选功能

<h4 uiAnchor id="uiTable-输出事件">输出事件</h4>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --           |--                    | --        |
| `uiSelectedItemsChange` | 用户改变当前选中项时触发 |`any[]`   | 当前选中的数据项 |

<h3 uiAnchor id="uiTableAllSelector">uiTableAllSelector</h3>

给当前 tr 附加全选功能，一般用在表头中的 tr 标签上。

<h3 uiAnchor id="uiTableSelectableItem">uiTableSelectableItem</h3>
<h4 uiAnchor id="uiTableSelectableItem-输入属性">输入属性</h4>

| 属性名 | 类型  | 默认值 | 说明    |
| --        | --        | -- |--        |
| `uiTableSelectableItem` | `any`   | |当前 tr 选中时，回传给 `uiTable` 的 `uiChange` 事件回调参数项的值 |
| `checked` | `boolean`   | false | 是否选中当前项 |

<h4 uiAnchor id="uiTableSelectableItem-输出事件">输出事件</h4>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --           |--                    | --        |
| `uiCheckStateChange` | 用户改变当前行选中状态时  |`boolean`   | 当前行选中的状态 |

