import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICardProject } from './interface/card-proyect.interface';

@Component({
  selector: 'app-card-for-project',
  templateUrl: './card-for-project.component.html',
  styleUrls: ['./card-for-project.component.scss'],
  imports: [ CommonModule ],
  standalone: true
})
export class CardForProjectComponent {

  @Input() dataProjects: ICardProject = {
    img: "",
    title: "string",
    description: "string"
  };

}
