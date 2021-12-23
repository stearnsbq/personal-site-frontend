import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminComponent } from './admin.component';
import { BlogComponent } from './blog/blog.component';
import { EditComponent } from './blog/edit/edit.component';
import { NewComponent } from './blog/new/new.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'about-me', component: AboutMeComponent, data: {label: 'Manage About Me'} },
      { path: 'blog', component: BlogComponent, data: {label: 'Manage Blog'}, children: [
        {path: 'new', component: NewComponent},
        {path: 'edit/:title', component: EditComponent}
      ] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
