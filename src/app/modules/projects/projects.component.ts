import { Component } from '@angular/core';
import { ICardProject } from 'src/app/components/card-for-project/interface/card-proyect.interface';
import listProjects from './utils/list-of-projects';
import { optionsOfTecnologies } from './utils/options-of-tecnologies';
import { IOptionOfTecnologies } from './interface/option-of-tecnologies.interface';
import { TypeTecnologies } from './interface/type-tecnologies.type';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  allProject: ICardProject[]  = listProjects;
  renderProjects: ICardProject[]  = [];

  options: IOptionOfTecnologies[] = optionsOfTecnologies;

  constructor() {
    this.renderProjects = this.allProject;
  }

  filterProjects(name: TypeTecnologies) {
    if(name === "ALL") {
      this.renderProjects = this.allProject;
      return;
    }
    this.renderProjects = this.allProject.filter(el => el.tecnologies?.includes(name));
  }
}
