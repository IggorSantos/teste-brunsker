import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,  
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,      
  ],
  providers: [  
  ]
})
export class HomeModule { }