import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlogPostCard } from 'src/app/model/IBlogPostCard';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public posts!: IBlogPostCard[];

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) {

    this.route.params.subscribe(async ({year, month, day}) => {

      this.route.queryParams.subscribe(async ({search, category}) => {
        this.posts = await this.api.getBlogPosts(1, search, category, parseInt(year), parseInt(month), parseInt(day)).toPromise()
      })

      this.posts = await this.api.getBlogPosts(1, undefined, undefined, parseInt(year), parseInt(month), parseInt(day)).toPromise()
      
    })



   }

  ngOnInit(): void {
  }


  gotoPost(post: IBlogPostCard){
    const date = new Date(post.created);



    this.router.navigate(['/blog', date.getFullYear(), date.getMonth() + 1, date.getDate(), post.title.replace(" ", "-") ])

  }

}
