import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'imovel-page', loadChildren: () => import('./pages/imovel-page/imovel-page.module').then(m => m.ImovelPageModule) },
  { path: 'create-imovel', loadChildren: () => import('./pages/create-imovel/create-imovel.module').then(m => m.CreateImovelModule) },
  { path: 'update-imovel', loadChildren: () => import('./pages/update-imovel/update-imovel.module').then(m => m.UpdateImovelModule) },
  { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
