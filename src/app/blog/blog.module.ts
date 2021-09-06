import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DateFilterComponent } from './date-filter/date-filter.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MonthPipe } from './month.pipe';
import { YearComponent } from './year/year.component';
import { MonthComponent } from './month/month.component';
import { DayComponent } from './day/day.component';
import { GridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    BlogComponent,
    DateFilterComponent,
    ToolbarComponent,
    MonthPipe,
    YearComponent,
    MonthComponent,
    DayComponent,
    GridComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    FlexLayoutModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class BlogModule { }
