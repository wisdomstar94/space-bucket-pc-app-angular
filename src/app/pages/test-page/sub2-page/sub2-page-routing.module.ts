import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sub2PageComponent } from './sub2-page.component';

const routes: Routes = [{ path: '', component: Sub2PageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sub2PageRoutingModule { }
