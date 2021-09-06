import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { PostComponent } from './post/post.component';
import { YearComponent } from './year/year.component';

const year = ':year'
const month = ':month'
const day = ':day'
const title = ':title'

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: year, component: YearComponent },
      { path: `${year}/${month}`, component: MonthComponent },
      { path: `${year}/${month}/${day}`, component: DayComponent },
      { path: `${year}/${month}/${day}/${title}`, component: PostComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
