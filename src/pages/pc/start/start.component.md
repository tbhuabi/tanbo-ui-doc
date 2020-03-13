<h2 id="简介" uiAnchor>简介</h2>

tanbo/ui 是基于 Angular 开发的 UI 组件库，基于 tanbo/ui 可以快速开发后台网站。
要使用 tanbo/ui，你需要先安装 <a href="https://nodejs.org" target="_blank">nodejs</a> 环境。

<h2 id="生成项目" uiAnchor>生成项目</h2>

你可以使用 <a href="https://cli.angular.io/" target="_blank">angular-cli</a> 创建一个项目，也可以采用 <a href="https://github.com/tbhuabi/quick-start-cli" target="_blank">quick-start-cli</a> 创建项目，如果采用 quick-start-cli，请选择创建 angular + scss 的选项。

<h2 id="安装-tanbo/ui" uiAnchor>安装 tanbo/ui</h2>

通过命令行，进入刚创建的项目根目录，然后输入以下命令，安装 tanbo/ui：

```bash
npm install @tanbo/ui --save
```

<strong class="ui-color-danger">注意：</strong>因当前版本已集成 TBus 富文本编辑器内测版，所以依赖项去掉了 quill 的依赖，如果安装时报需要 quill 或 quill-image-resize 模块，请在 package.json 的 dependencies 中添加如下依赖：

```bash
"quill": "^1.3.6",
"quill-image-resize": "git+https://github.com/tbhuabi/quill-image-resize-module.git#338ff34c276c19deb290fbd861a1e593ed124228",
```

<h2 id="在项目中导入-tanbo/ui" uiAnchor>在项目中导入 tanbo/ui</h2>

导入 tanbo/ui 的样式表
```typescript
// # main.ts

import '~@tanbo/ui/index.min.css';
```

导入 tanbo/ui 组件库
```typescript
// # app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIModule } from '@tanbo/ui';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UIModule.forRoot() // 导入 UIModule，并调用 `forRoot` 方法
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {
}
```

在根组件中应用 ui-app 组件
```typescript
// # app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ui-app>
    <!-- 你的代码 -->
  </ui-app>
  `
})
export class AppComponent {

}
```

<h2 id="通用样式" uiAnchor>通用样式</h2>

<h3 id="布局类" uiAnchor>布局类</h3>

| class | 说明 |
|-------|------|
| `.ui-container`          | 设置容器最大宽度 1200px，左右各加 15px 的 padding,，并水平居中 |
| `.ui-container-fluid`    | 设置容器最大宽度 100%，左右各加 15px 的 padding |
| `.ui-clearfix`           | 清除子元素浮动 |
| `.ui-pull-left`          | 左浮动 |
| `.ui-pull-right`         | 右浮动 |

<h3 id="文字类" uiAnchor>文字类</h3>

| class | 说明 |
|-------|------|
| `.ui-text-left`          | 设置行类元素左对齐 |
| `.ui-text-center`        | 设置行类元素居中对齐 |
| `.ui-text-right`         | 设置行类元素右对齐 |
| `.ui-text-justify`       | 设置文字两端对齐 |
| `.ui-text-bold`          | 设置文字对齐 |
| `.ui-text-italic`        | 设置文字斜体 |
| `.ui-text-overflow`      | 设置文字溢出时，自动省略号 |

<h3 id="颜色类" uiAnchor>颜色类</h3>

| class | 说明 |
|-------|------|
| `.ui-color-default`      | 将文字颜色设置为默认颜色，与 scss 变量设置有关 |
| `.ui-color-primary`      | 将文字颜色设置为主要风格色，与 scss 变量设置有关 |
| `.ui-color-info`         | 将文字颜色设置为信息提示色，与 scss 变量设置有关 |
| `.ui-color-success`      | 将文字颜色设置为成功色，与 scss 变量设置有关 |
| `.ui-color-warning`      | 将文字颜色设置为警告颜色，与 scss 变量设置有关 |
| `.ui-color-danger`       | 将文字颜色设置为错误颜色，与 scss 变量设置有关 |


<h2 id="自定义样式" uiAnchor>自定义样式</h2>

通过更改 ui-native 样式表的 scss 变量，更改主题、色调、间距等。

```scss
$color-primary: green; // 更改主题颜色
@import "~@tanbo/ui/assets/scss/varibles";
@import "~@tanbo/ui/assets/scss/components";
@import "~@tanbo/ui/assets/fonts/style.css";
```
