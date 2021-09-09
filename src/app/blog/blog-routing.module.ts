import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

const year = ':year'
const month = ':month'
const day = ':day'
const title = ':title'

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: year, component: BlogComponent },
      { path: `${year}/${month}`, component: BlogComponent },
      { path: `${year}/${month}/${day}`, component: BlogComponent },
      { path: `${year}/${month}/${day}/${title}`, component: PostComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
