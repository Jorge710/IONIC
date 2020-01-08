import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'porhacer',
    loadChildren: () => import('./pages/porhacer/porhacer.module').then( m => m.PorhacerPageModule)
  },
  {
    path: 'make-appoinment',
    loadChildren: () => import('./pages/make-appoinment/make-appoinment.module').then( m => m.MakeAppoinmentPageModule)
  },
  {
    path: 'edit-appoinment',
    loadChildren: () => import('./pages/edit-appoinment/edit-appoinment.module').then( m => m.EditAppoinmentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
