import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UI_ANCHOR_LINK_DISTANCE, UIModule } from '@tanbo/ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../modules/components.module';
import { routes } from './tbus.routes';

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
    ArchitectureComponent,
    KeywordsComponent,
    UploadComponent,
    SponsorshipComponent,
    ExtendFormatterComponent,
    ExtendComponentComponent,
    QuestionComponent,
    AboutComponent
  ],
  providers: [{
    provide: UI_ANCHOR_LINK_DISTANCE,
    useValue: 70
  }]
})
export class TextBusModule {

}
