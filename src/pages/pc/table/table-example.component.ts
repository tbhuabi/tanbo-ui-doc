import { Component } from '@angular/core';

@Component({
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent {
  dataList: any[] = [{
    name: '张三',
    age: 34,
    job: '程序员'
  }, {
    name: '李四',
    age: 12,
    job: '银行家'
  }, {
    name: '王五',
    age: 65,
    job: '产业工人'
  }, {
    name: '赵六',
    age: 22,
    job: '艺术家'
  }];

  saveSelectedData(items: any[]) {
    console.log(items);
  }
}
