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

@NgModule({
  declarations: [
    BlogComponent,
    DateFilterComponent,
    ToolbarComponent,
    MonthPipe,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    FlexLayoutModule,
    FontAwesomeModule
  ]
})
export class BlogModule { }
