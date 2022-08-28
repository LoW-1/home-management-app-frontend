import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [FooterComponent, HeaderComponent, NavbarComponent]
})
export class ComponentsModule { }
