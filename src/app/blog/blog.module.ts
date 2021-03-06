import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MonthPipe } from './month.pipe';
import { GridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [
    BlogComponent,
    ToolbarComponent,
    MonthPipe,
    GridComponent,
    PostComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule,
  ],
  providers:[]
})
export class BlogModule { }
