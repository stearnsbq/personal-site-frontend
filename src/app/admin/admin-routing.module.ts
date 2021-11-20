import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminComponent } from './admin.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'about-me', component: AboutMeComponent, data: {label: 'About Me'} },
      { path: 'blog', component: BlogComponent, data: {label: 'Blog'} },
      { path: 'projects', component: ProjectsComponent, data: {label: 'Projects'} },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
