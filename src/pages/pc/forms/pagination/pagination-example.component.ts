import { Component } from '@angular/core';

@Component({
  templateUrl: './pagination-example.component.html',
  styleUrls: ['./pagination-example.component.scss']
})
export class PaginationExampleComponent {
  currentPage = 4;
  pages = 20;

  pageChange(p: number) {
    console.log(`当前用户点击的是第${p}页`);
  }
}