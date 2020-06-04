```js
/**
 * TBus 配置项
 */
export interface EditorOptions {
  /** 设置主题 */
  theme?: string;
  /** 设置最大历史栈 */
  historyStackSize?: number;
  /** 设置模板转换器 */
  templateTranslators?: TemplateTranslator[];
  /** 设置格式转换器 */
  formatters?: InlineFormatter[];
  /** 工具条配置 */
  toolbar?: (ToolFactory | ToolFactory[])[];
  /** 配置生命周期勾子 */
  hooks?: Lifecycle[];
  /** 配置编辑器的默认样式 */
  styleSheets?: string[];
  /** 当某些工具需要上传资源时的调用函数，调用时会传入上传资源的类型，如 image、video、audio等，该函数返回一个字符串，作为资源的 url 地址 */
  uploader?(type: string): (string | Promise<string> | Observable<string>);
  /** 设置初始化 TBus 时的默认内容 */
  contents?: string;
}
```
