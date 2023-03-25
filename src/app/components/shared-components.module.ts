import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    CardComponent,    
  ],
  imports: [
    CommonModule,   
    RouterModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,    
    CardComponent,   
  ],
  providers: [
  ],
})
export class SharedComponentsModule {}
