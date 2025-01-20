import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  imports: [ CommonModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class CertificatesComponent implements OnInit {
  public certificatePicture: string[] = [];
  swiper = signal<SwiperContainer | null>(null);

  constructor() {
    this.addCertificates();
  }

  ngOnInit(): void {
    const swiperElementConstructor = document.querySelector('#certificate');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 3,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        enabled: true
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      spaceBetween: 10,
      breakpoints: {
        1024: {
          slidesPerView: 3,
          autoplay: {
            delay: 300
          }
        },
        768: {
          slidesPerView: 2,
          autoplay: {
            delay: 3000
          }
        },
        480: {
          slidesPerView: 1,
          autoplay: {
            delay: 3000
          }
        }
      },
    }
    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiper.set(swiperElementConstructor as SwiperContainer);
    this.swiper()?.initialize()
  }

  addCertificates() {
    return this.certificatePicture = [
      "Programación orientada a Objetos y Asincronismo.jpeg",
      "Fundamentos de Angular.jpeg",
      "Componentes y servicios.jpeg",
      "Angular Router y Programación Modular.png",
      "Angular Unit Testing para componentes.jpeg",
      "Angular Unit Testing para servicios.jpeg",
      "Consumo de API REST con Angular.jpeg",
      "Grid Básico.jpeg",
      "Fundamentos de Typescript.jpeg",
      "Curso de backend con Nest.png",
      "diploma de testing de angular.png",
      "diploma de curso de despliegues.png",
    ]
  };
}
