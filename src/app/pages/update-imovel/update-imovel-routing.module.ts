import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateImovelComponent } from './update-imovel.component';


const routes: Routes = [{ path: '', component: UpdateImovelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateImovelRoutingModule { }