import { Routes } from '@angular/router';
import { TBusComponent } from './tbus.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { UploadComponent } from './upload/upload.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { ExtendFormatterComponent } from './extend-formatter/extend-formatter.component';
import { ExtendComponentComponent } from './extend-component/extend-component.component';
import { QuestionComponent } from './question/question.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [{
  path: '',
  component: TBusComponent
}, {
  path: 'start',
  component: NavComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'architecture',
    component: ArchitectureComponent
  }, {
    path: 'keywords',
    component: KeywordsComponent
  }, {
    path: 'upload',
    component: UploadComponent
  }, {
    path: 'sponsorship',
    component: SponsorshipComponent
  }, {
    path: 'extend-formatter',
    component: ExtendFormatterComponent
  }, {
    path: 'extend-component',
    component: ExtendComponentComponent
  }, {
    path: 'question',
    component: QuestionComponent
  }, {
    path: 'about',
    component: AboutComponent
  }]
}];
