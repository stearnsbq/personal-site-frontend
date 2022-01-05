import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { IBlogPostCard } from 'src/app/model/IBlogPostCard';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';
import { query } from '@angular/animations';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  public posts!: IBlogPostCard[];
  environment = environment

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    combineLatest([this.route.params, this.route.queryParams])
      .pipe(
        map(([params, query]) => ({params,query})))
      .subscribe(
        async ({
          params,
          query,
        }) => {


          console.log(params, query)

          this.posts = (await this.api
            .getBlogPosts(
              1,
              query.search,
              query.tag,
              parseInt(params.year),
              parseInt(params.month),
              parseInt(params.day)
            )
            .toPromise()).data;
        }
      );
  }

  ngOnInit(): void {}

  gotoPost(post: IBlogPostCard) {
    const date = new Date(post.created);

    this.router.navigate([
      '/blog',
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      post.title,
    ]);
  }
}
