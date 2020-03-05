<h2 uiAnchor id="ui-modal">ui-modal</h2>
<h3 uiAnchor id="输入属性">输入属性</h3>

| 输入属性名 | 输入类型  | 默认值 |说明    |
| --        | --        | -- |--        |
| `size`      | `string`   | |可选的值为 `lg`、`sm`，控制模态框的大小，你也可以通过 css 自定义大小 |
| `title`      | `string`   | |当使用默认头部时的标题 |
| `cancelText`      | `string`   | 取消 | 当使用默认底部时的取消按扭的文字 |
| `confirmText`      | `string`   | 确定 | 当使用默认底部时的确定按扭的文字 |
| `hideDefaultHeader`      | `boolean`   | false | 是否强制隐藏默认头部 |
| `hideDefaultFooter`      | `boolean`   | false | 是否强制隐藏默认底部 |
| `confirmBtnType`      | `string`   | button | 当使用默认底部时，确定按扭的类型，可选值为 `button`、`submit` |
| `theme`      | `string`   | dark | 当使用默认头部时，弹窗的风格，可选值：`default`、`dark`、`primary`、`success`、`info`、`warning`、`danger`。你也可以传入一个自定义的 class |

<h3 uiAnchor id="输出事件">输出事件</h3>

| 事件名         | 事件触发时机 | 参数类型              | 参数说明    |
| --             | --          | --                   | --          |
| `uiConfirm`   | 使用默认底部，用户点击确定按扭时触发 |      |  |
| `uiClose`        | 使用默认头部或底部，点击关闭或取消按扭时触发 |  |  |

