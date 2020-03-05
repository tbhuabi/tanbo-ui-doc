import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const hljs = require('highlight.js');
const marked = require('marked');

// const markdownIt = require('markdown-it');
const md = marked.setOptions({
  highlight: function (str: string, lang: string): string {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (e) {
        console.log(e);
      }
    }

    return '';
  }
});

@Component({
  selector: 'doc-view',
  templateUrl: './doc-view.html',
  styleUrls: ['./doc-view.scss']
})
export class DocViewComponent implements OnInit {
  @Input()
  set docData(value: any) {
    this.data = [];
    this.render(value);
  }

  docHtml = '';

  data: any[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let value = this.activatedRoute.snapshot.data;
    this.render(value);
  }

  render(value: any) {
    if (!value) {
      return;
    }
    const doc = value.doc && value.doc.default || '';
    const styleSheet = value.css && value.css.default || '';
    const ts = value.ts && value.ts.default || '';
    let template = value.html && value.html.default || '';
    if (/<doc-view>/.test(template)) {
      template = template.replace(/^[\s\n]*<doc-view>[\s\n]*|[\s\n]*<\/doc-view>[\s\n]*$/g, '');
      template = template.replace(/^\s\s/mg, '');
    }
    if (doc) {
      let docs = doc.split('````');

      this.docHtml = docs.map((item: string) => {
        if (item.indexOf('html\n') === 0) {
          return item.replace(/^html\n/, '');
        }
        return md(item);
      }).join('');
    }
    if (ts) {
      this.data.push({
        title: 'Typescript',
        html: md('```ts\n' + ts + '\n```')
      });
    }
    if (styleSheet) {
      this.data.push({
        title: 'SCSS',
        html: md('```scss\n' + styleSheet + '\n```')
      });
    }
    if (template) {
      this.data.push({
        title: 'HTML',
        html: md('```html\n' + template + '\n```')
      });
    }
  }
}
