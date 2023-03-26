import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImovelPageComponent } from './imovel-page.component';
import { ImovelPageRoutingModule } from './imovel-page-routing.module';

import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [ImovelPageComponent],
    imports: [
      CommonModule,
      ImovelPageRoutingModule,
      FormsModule,
      SharedComponentsModule,     
    ]
  })
  export class ImovelPageModule { }