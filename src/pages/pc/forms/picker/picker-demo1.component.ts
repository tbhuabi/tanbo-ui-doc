import { Component, OnInit } from '@angular/core';
import { PickerCell } from '@tanbo/ui';
import { Observable, zip } from 'rxjs';

import { address } from './address';

@Component({
  selector: 'picker-demo1',
  templateUrl: './picker-demo1.component.html'
})
export class PickerDemo1Component implements OnInit {
  pickerData: PickerCell[] = [];
  pickerValue: PickerCell[] = [];

  ngOnInit(): void {
    // 模拟从服务端请求数据
    const sub = zip(
      // 从服务端获取已选中的地址信息
      new Observable<{
        province: string;
        city: string;
        county: string;
      }>(subscriber => {
        setTimeout(() => {
          subscriber.next({
            province: '130000',
            city: '130300',
            county: '130324'
          });
        }, 500);
      }),
      // 从服务端获取可选项数据
      new Observable(subscriber => {
        setTimeout(() => {
          subscriber.next(address);
        }, 300);
      })
    ).subscribe(response => {
      sub.unsubscribe();
      const selectedAddress = response[0];
      this.pickerData = response[1] as PickerCell[];

      // 如果可选项的数据是全量的，不需要根据当前已选中数据按需加载，那么可以采用声明的方式是更好的方案。
      // this.pickerValue = [{
      //   label: '河北省',
      //   value: selectedAddress.province
      // }, {
      //   label: '秦皇岛市',
      //   value: selectedAddress.city
      // }, {
      //   label: '卢龙县',
      //   value: selectedAddress.county
      // }];

      this.initAddress(this.pickerData,
        [],
        [selectedAddress.province, selectedAddress.city, selectedAddress.county], result => {
          this.pickerValue = result;
        });
    });
  }

  initAddress(addressList: PickerCell[],
              result: PickerCell[],
              codes: string[],
              callback: (result: PickerCell[]) => void) {
    const code = codes.shift();
    if (!code) {
      callback(result);
      return;
    }
    const address = this.findSelectedAddress(code, addressList);
    if (address) {
      result.push(address);
    } else {
      return;
    }

    // 一般情况下，服务端只会返回一层的数据，第二层数据需要根据上一级选中
    // 的结果再次发起请求，服务端根据参数返回下一级可选项，如下所示：
    // this.demoService.getAddressListByCode(address.value).subscribe((response) => {
    //   contactAddress.children = response;
    //   this.initAddress(children, result, codes, callback);
    // });

    // 因为是 demo，所以这里直接拿 `address.children` 使用即可
    this.initAddress(address.children, result, codes, callback);
  }

  findSelectedAddress(value: string, cells: PickerCell[]) {
    for (const cell of cells) {
      if (cell.value === value) {
        return cell;
      }
    }
    return null;
  }
}
