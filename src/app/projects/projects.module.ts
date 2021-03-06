import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GridComponent } from './grid/grid.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProjectsComponent,
    ToolbarComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class ProjectsModule { }
