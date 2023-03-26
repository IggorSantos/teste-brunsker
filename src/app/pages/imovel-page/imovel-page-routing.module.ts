import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImovelPageComponent } from './imovel-page.component';

const routes: Routes = [{ path: '', component: ImovelPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImovelPageRoutingModule { }