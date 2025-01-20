import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import logosCarrusel from './utils/logos'
import { TechnologyLogo } from './interface/tecnology-logo';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
  imports: [ CommonModule ],
  standalone: true
})
export class CarruselComponent {

  logos: TechnologyLogo[] = [];

  constructor() {
    this.getAllImages()
  }

  getAllImages() {
    this.logos = logosCarrusel
  }
}
