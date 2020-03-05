import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface TreeNode {
  label: string;
  hasChildren: boolean;
  children?: TreeNode[];
}

@Component({
  selector: 'tree-demo1',
  templateUrl: './demo1.component.html'
})
export class TreeDemo1Component implements OnInit {
  treeList: TreeNode[] = [];

  ngOnInit(): void {
    // 模拟从服务端获取数据
    const sub = new Observable<TreeNode[]>(subscriber => {
      setTimeout(() => {
        subscriber.next([{
          label: 'A',
          hasChildren: true
        }, {
          label: 'B',
          hasChildren: true
        }, {
          label: 'C',
          hasChildren: true
        }, {
          label: 'D',
          hasChildren: true
        }]);
      }, 2000);
    }).subscribe(response => {
      sub.unsubscribe();
      this.treeList = response;
    });
  }

  getChildren(node: TreeNode) {
    // 模拟从服务端获取数据
    if (node.children) {
      return;
    }
    setTimeout(() => {
      node.children = 'ABCD'.split('').map(item => {
        return {
          label: node.label + item,
          hasChildren: Math.random() > 0.5
        };
      });
    }, 200);
  }
}
