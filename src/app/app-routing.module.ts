import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // ...
  {
    path: 'test',
    loadChildren: () => import('./pages/test-page/test-page.module').then(m => m.TestPageModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/index-page/index-page.module').then(m => m.IndexPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
