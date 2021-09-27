import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [{path: '', component: ProjectsComponent, children: [{path: ':project', component: PageComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
