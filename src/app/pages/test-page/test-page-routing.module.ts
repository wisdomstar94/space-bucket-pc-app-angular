import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './test-page.component';

const routes: Routes = [
  {
    path: '',
    component: TestPageComponent,
    children: [
      { path: 'sub1', loadChildren: () => import('./sub1-page/sub1-page.module').then(m => m.Sub1PageModule) },
      { path: 'sub2', loadChildren: () => import('./sub2-page/sub2-page.module').then(m => m.Sub2PageModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestPageRoutingModule { }
