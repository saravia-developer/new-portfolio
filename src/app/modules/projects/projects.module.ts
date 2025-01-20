import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardForProjectComponent } from 'src/app/components/card-for-project/card-for-project.component';
import { ProjectsComponent } from './projects.component';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    CardForProjectComponent
  ],
  exports: [ProjectsComponent],
})
export class ProjectsModule { }
