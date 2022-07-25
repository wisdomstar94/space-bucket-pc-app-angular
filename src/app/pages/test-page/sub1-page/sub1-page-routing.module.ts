import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sub1PageComponent } from './sub1-page.component';

const routes: Routes = [{ path: '', component: Sub1PageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sub1PageRoutingModule { }
