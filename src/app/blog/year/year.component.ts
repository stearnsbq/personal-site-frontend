import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlogPostCard } from 'src/app/model/IBlogPostCard';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {
  public posts?: IBlogPostCard[];

  constructor(private route: ActivatedRoute, private api: ApiService ) {
    this.route.paramMap.subscribe(async (params) => {

      const {search, category} = await this.route.queryParams.toPromise()

      this.posts = await this.api.getBlogPosts(1, search, category, parseInt(params.get('year') as string)).toPromise()
      
    })
   }

  ngOnInit(): void {
  }

}
