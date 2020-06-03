import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UI_ANCHOR_LINK_DISTANCE, UIModule } from '@tanbo/ui';

import { TBusComponent } from './tbus.component';
import { routes } from './tbus.routes';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ComponentsModule } from '../../modules/components.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { KeywordsComponent } from './keywords/keywords.component';

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    TBusComponent,
    NavComponent,
    HomeComponent,
    TodoListComponent,
    ArchitectureComponent,
    KeywordsComponent
  ],
  providers: [{
    provide: UI_ANCHOR_LINK_DISTANCE,
    useValue: 70
  }]
})
export class TBusModule {

}
