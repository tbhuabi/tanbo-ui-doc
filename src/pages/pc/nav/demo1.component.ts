import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Compiler,
  Injector,
  NgModuleRef,
  NgModule
} from '@angular/core';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UIModule } from '@tanbo/ui';

export interface NavConfig {
  label: string;
  icon?: string;
  path?: string;
  children?: NavConfig[];
}

@Component({
  selector: 'nav-demo1',
  templateUrl: './demo1.component.html'
})
export class NavDemo1Component implements OnInit {
  @ViewChild('menuContainer', {read: ViewContainerRef, static: true}) menuContainer: ViewContainerRef;

  private navTemplate = '';

  constructor(private compiler: Compiler,
              private injector: Injector,
              private ngModuleRef: NgModuleRef<any>) {
  }

  ngOnInit(): void {
    // 模拟从服务器请求数据
    const sub = new Observable<NavConfig[]>(subscriber => {
      setTimeout(() => {
        const nav: NavConfig[] = [{
          label: '导航一',
          icon: 'icon-newspaper',
          path: 'http://www.tanboui.com'
        }, {
          label: '导航二',
          icon: 'icon-quill',
          path: 'http://www.tanboui.com'
        }, {
          label: '导航三',
          icon: 'icon-droplet',
          path: 'http://www.tanboui.com',
          children: [{
            label: '导航三-1',
            icon: 'icon-eyedropper',
            path: 'http://www.tanboui.com'
          }, {
            label: '导航三-2',
            icon: 'icon-camera',
            path: 'http://www.tanboui.com'
          }, {
            label: '导航三-3',
            icon: 'icon-blog',
            path: 'http://www.tanboui.com'
          }]
        }];
        subscriber.next(nav);
      }, 3000);
    }).subscribe(response => {
      sub.unsubscribe();
      this.navTemplate = this.createNavTemplate(response);
      this.render();
    });
  }

  createNavTemplate(navConfig: NavConfig[]): string {
    // 递归创建菜单 HTML 模板
    return [
      '<ui-nav>',
      navConfig.map(item => {
        const nav = item.children ?
          `<ui-nav-inner>
             <ui-nav-thumbnail><span class="${item.icon}"></span></ui-nav-thumbnail>${item.label}
           </ui-nav-inner>
           ${this.createNavTemplate(item.children)}
          ` :
          `<a uiNavInner href="${item.path}" target="_blank">
             <ui-nav-thumbnail><span class="${item.icon}"></span></ui-nav-thumbnail>${item.label}
           </a>`;
        return `<ui-nav-item>${nav}</ui-nav-item>`;
      }).join(''),
      '</ui-nav>'
    ].join('');
  }
  // 根据字符串模板渲染菜单
  render() {
    class MenuComponent {
    }

    class MenuModule {
    }

    const MenuModuleWrapper = NgModule({
      imports: [
        UIModule,
        RouterModule,
        CommonModule
      ],
      declarations: [
        Component({
          template: this.navTemplate
        })(MenuComponent)
      ]
    })(MenuModule);

    this.compiler.compileModuleAndAllComponentsAsync(MenuModuleWrapper).then(factories => {
      factories.componentFactories.forEach(factory => {
        if (factory.componentType === MenuComponent) {
          const componentRef = factory.create(this.injector, [], null, this.ngModuleRef);
          this.menuContainer.insert(componentRef.hostView);
        }
      });
    });
  }
}
