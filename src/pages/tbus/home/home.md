<h1 uiAnchor id="安装">安装</h1>

通过 npm 安装 TBus：
```bash
npm install @tanbo/tbus
```

在 html 中准备一个空的元素
```html
<body>
  <div id="editor"></div>
</body>

```

通过 css 选择器，或直接传入一个 DOM 元素初始化 TBus。
```typescript
import { createEditor } from '@tanbo/tbus';
import { Observable } from 'rxjs';

import '@tanbo/tbus/bundles/tbus.min.css';

const editor = createEditor('#editor', {
  // theme: // 可选 'dark' | 'mac-os' | 'mac-os-dark'，不传即为默认样式
  uploader(type: string): string | Promise<string> | Observable<string> {
    // switch (type) {
    //   case 'video':
    //     console.log('上传视频');
    //     break;
    //   case 'image':
    //     console.log('上传视频');
    //     break;
    //   case 'audio':
    //     console.log('上传音频');
    //     break;
    // }
    return Promise.resolve().then(() => {
      return '/test'
    })
  },
  contents: `<p>欢迎你使用&nbsp;<strong>TBus</strong> 富文本编辑器...<br></p>`
});

editor.onChange.subscribe(() => {
  console.log(editor.getContents());
});
```
