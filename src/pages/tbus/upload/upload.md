<h1 uiAnchor id="上传图片">上传图片</h1>

TBus 并未实现任何上传功能，只在配置项提供了一个接口，由使用者自定义上传方式。如上传图片：

```typescript
import { createEditor } from '@tanbo/tbus';
import { Observable } from 'rxjs';

createEditor('#editor', {
  uploader(type: string): string | Promise<string> | Observable<string> {
    switch (type) {
      case 'image':
        const fileInput = document.createElement('input');
        fileInput.setAttribute('type', 'file');
        fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
        fileInput.style.cssText = 'position: absolute; left: -9999px; top: -9999px; opacity: 0';
        const promise =  new Promise<string>(resolve => {
          fileInput.addEventListener('change', event => {
            const form = new FormData();
            for (const file of event.target.files) {
              form.append('file', file);
            }
            document.body.removeChild(fileInput);
            $.fileUploader('/api', form).success(response => {
              resolve(response.imageUrl);
            })
          })
        })
        document.body.appendChild(fileInput);
        fileInput.click();
        return promise;
      // case 'video':
      //   console.log('上传视频');
      //   break;
      // case 'audio':
      //   console.log('上传音频');
      //   break;
    }
  }
})
```

<h2 uiAnchor id="关于-Type-参数">关于 Type 参数</h2>

TBus 未预定义 uploader 函数的 type 参数值，type 参数值是由工具条的工具类定义的，目前 TBus 自带的工具类有 image、video、audio 三种。其它的则由用户扩展的工具类定义。
