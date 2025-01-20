import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { CarruselComponent } from 'src/app/components/carrusel/carrusel.component';
import { CertificatesComponent } from 'src/app/components/certificates/certificates.component';
import { ProjectsModule } from '../projects/projects.module';
import { AboutMeComponent } from 'src/app/components/about-me/about-me.component';
import { SwiperComponent } from 'src/app/components/swiper/swiper.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    ProjectsModule,
    CarruselComponent,
    CertificatesComponent,
    AboutMeComponent,
    SwiperComponent
  ],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
