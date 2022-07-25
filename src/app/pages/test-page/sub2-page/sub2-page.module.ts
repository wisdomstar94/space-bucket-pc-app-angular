import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sub2PageRoutingModule } from './sub2-page-routing.module';
import { Sub2PageComponent } from './sub2-page.component';


@NgModule({
  declarations: [
    Sub2PageComponent
  ],
  imports: [
    CommonModule,
    Sub2PageRoutingModule
  ]
})
export class Sub2PageModule { }
