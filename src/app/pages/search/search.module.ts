import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,  
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,      
  ],
  providers: [  
  ]
})
export class SearchModule { }