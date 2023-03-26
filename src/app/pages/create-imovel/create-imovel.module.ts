import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CreateImovelComponent } from './create-imovel.component';
import { CreateImovelRoutingModule } from './create-imovel-routing.module';

import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [CreateImovelComponent],
    imports: [
      CommonModule,
      CreateImovelRoutingModule,
      ReactiveFormsModule,
      FormsModule,     
      SharedComponentsModule,     
    ]
  })
  export class CreateImovelModule { }