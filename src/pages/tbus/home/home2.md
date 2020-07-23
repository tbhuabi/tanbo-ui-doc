```html
<!DOCTYPE html>
<html>
<head>
  <title>TBus 示例</title>
  <link href="/path/tbus.min.css" rel="stylesheet">
  <script src="/path/tbus.min.js"></script>
</head>
<body>
  <div id="editor"></div>
  <script>
     var editor = tbus.createEditor(document.getElementById('editor'));
     editor.onChange.subscribe(function() {
       console.log(editor.getContents());
     })    
  </script>
</body>
</html>
```


<h3 uiAnchor id="功能定制">功能定制</h3>

一般情况下，直接通过 `createEditor` 函数初始化 TBus 即可，要定制工具条，你需要手动实例化 TBus。如果你不清楚 TBus 提供了哪些工具，你只需要到 `/node_modules/@tanbo/tbus/bundles/lib/toolbar/tools` 下查看即可；
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
  unlinkTool,  
  videoTool, 
  codeTool, 
  leftToRightTool, 
  rightToLeftTool
} from '@tanbo/tbus';

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
    [tableTool, tableEditTool],
    [cleanTool]
  ]
});
editor.onChange.subscribe(() => {
  console.log(editor.getContents());
});
```
