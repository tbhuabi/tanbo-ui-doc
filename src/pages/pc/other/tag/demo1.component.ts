import { Component } from '@angular/core';

@Component({
  selector: 'tag-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class TagDemo1Component {

  tags = Array.from({length: 5}).fill(0);

  close(i: number) {
    this.tags.splice(i, 1);
  }
}
