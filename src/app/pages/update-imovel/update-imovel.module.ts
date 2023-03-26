import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateImovelComponent } from './update-imovel.component';
import { UpdateImovelRoutingModule } from './update-imovel-routing.module';


import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [UpdateImovelComponent],
    imports: [
      CommonModule,
      UpdateImovelRoutingModule,
      ReactiveFormsModule,
      FormsModule,     
      SharedComponentsModule,     
    ]
  })
  export class UpdateImovelModule { }