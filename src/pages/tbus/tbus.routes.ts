import { Routes } from '@angular/router';
import { TBusComponent } from './tbus.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { UploadComponent } from './upload/upload.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: TBusComponent
}, {
  path: 'start',
  component: NavComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'todo-list',
    component: TodoListComponent
  }, {
    path: 'architecture',
    component: ArchitectureComponent
  }, {
    path: 'keywords',
    component: KeywordsComponent
  }, {
    path: 'upload',
    component: UploadComponent
  }]
}];
