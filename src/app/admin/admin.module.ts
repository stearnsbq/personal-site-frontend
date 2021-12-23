import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { QuillModule } from 'ngx-quill';
import { NewComponent } from './blog/new/new.component';
import { EditComponent } from './blog/edit/edit.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidenavComponent,
    BlogComponent,
    ProjectsComponent,
    AboutMeComponent,
    NewComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
