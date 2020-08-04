```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TextBus 示例</title>
  <link href="https://www.tanboui.com/static/textbus/textbus.min.css" rel="stylesheet">
  <script src="https://www.tanboui.com/static/textbus/textbus.min.js"></script>
</head>
<body>
  <div id="editor"></div>
  <script>
     var editor = textbus.createEditor(document.getElementById('editor'));
     editor.onChange.subscribe(function() {
       console.log(editor.getContents());
     })    
  </script>
</body>
</html>
```


<h3 uiAnchor id="功能定制">功能定制</h3>

一般情况下，直接通过 `createEditor` 函数初始化 TextBus 即可，要定制工具条，你需要手动实例化 TextBus。如果你不清楚 TextBus 提供了哪些工具，你只需要到 `/node_modules/@tanbo/textbus/bundles/lib/toolbar/tools` 下查看即可；
```typescript
import {
  Editor,
  audioTool,
  blockBackgroundTool,
  blockquoteTool,
  boldTool,
  cleanTool,
  preTool,
  colorTool,
  emojiTool,
  fontFamilyTool,
  fontSizeTool,
  headingTool,
  historyBackTool,
  historyForwardTool,
  imageTool,
  italicTool,
  letterSpacingTool,
  lineHeightTool,
  linkTool,
  olTool,
  strikeThroughTool,
  subscriptTool,
  superscriptTool,
  tableEditTool,
  tableTool,
  textAlignTool,
  textBackgroundTool,
  textIndentTool,
  ulTool,
  underlineTool,
  videoTool,
  codeTool,
  leftToRightTool,
  rightToLeftTool,
  tableAddParagraphTool,
  tableRemoveTool,
  tdBorderColorTool,
  unlinkTool, 
  findTool
} from '@tanbo/textbus';

const editor = new Editor(document.getElementById('editor'), {
  toolbar: [
    [historyBackTool, historyForwardTool],
    [headingTool],
    [boldTool, italicTool, strikeThroughTool, underlineTool],
    [blockquoteTool, codeTool],
    [preTool],
    [olTool, ulTool],
    [fontSizeTool, lineHeightTool, letterSpacingTool, textIndentTool],
    [subscriptTool, superscriptTool],
    [leftToRightTool, rightToLeftTool],
    [colorTool, textBackgroundTool, blockBackgroundTool, emojiTool],
    [fontFamilyTool],
    [linkTool, unlinkTool],
    [imageTool, audioTool, videoTool],
    [textAlignTool],
    [tableTool, tableEditTool, tdBorderColorTool, tableAddParagraphTool, tableRemoveTool],
    [findTool],
    [cleanTool]
  ]
});
editor.onChange.subscribe(() => {
  console.log(editor.getContents());
});
```
