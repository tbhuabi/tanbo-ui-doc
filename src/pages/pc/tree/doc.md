<h2 uiAnchor id="ui-tree">ui-tree</h2>
<h3 uiAnchor id="ui-tree-输入属性">输入属性</h3>

| 属性名      | 类型      | 默认值  | 说明       |
| --                | --        | --            |--        |
| `depth`       | `number`  | 根据上下文确定             | 设置当前树的层级         |
| `expand`          | `boolean`  | 当前为最上层时，默认为 true，否则为 false             | 设置当前树默认是否展开|


<h2 uiAnchor id="ui-tree-inner">ui-tree-inner</h2>
<h3 uiAnchor id="ui-tree-inner-输入属性">输入属性</h3>

| 属性名      | 类型      | 默认值  | 说明       |
| --                | --        | --            | --        |
| `depth`       | `number`  | 根据上下文确定             | 设置当前项的层级         |


<h2 uiAnchor id="ui-tree-expand">ui-tree-expand</h2>
<h3 uiAnchor id="ui-tree-expand-输入属性">输入属性</h3>

| 属性名      | 类型      | 默认值  | 说明       |
| --                | --        | --            |--        |
| `checkedIcon`       | `string`  | 通过 `UI_TREE_CHECKED_ICON` token 注入，默认为 `ui-icon-arrow2-bottom` | 设置展开状态时显示的 icon         |
| `uncheckedIcon`       | `string`  | 通过 `UI_TREE_UNCHECKED_ICON` token 注入，默认为 `ui-icon-arrow2-right` | 设置收起状态时显示的 icon         |
| `checked`       | `boolean`  | false             | 子树是否展开         |
