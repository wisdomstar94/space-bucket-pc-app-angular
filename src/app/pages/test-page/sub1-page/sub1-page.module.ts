import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sub1PageRoutingModule } from './sub1-page-routing.module';
import { Sub1PageComponent } from './sub1-page.component';


@NgModule({
  declarations: [
    Sub1PageComponent
  ],
  imports: [
    CommonModule,
    Sub1PageRoutingModule
  ]
})
export class Sub1PageModule { }
