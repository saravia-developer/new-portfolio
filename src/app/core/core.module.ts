import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarruselComponent } from '../components/carrusel/carrusel.component';
import { CertificatesComponent } from '../components/certificates/certificates.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class CoreModule { }
