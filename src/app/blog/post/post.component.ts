import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlogPost } from 'src/app/model/IBlogPost';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public postContent?: string;
  public post?: IBlogPost;
  constructor(private api : ApiService, private route: ActivatedRoute) {

    this.route.params.subscribe(({year, month, day, title}) => {

      this.api.getBlogPost(year, month, day, title).subscribe(({data}) => {
        this.post = data;
      })
    })


  }

  ngOnInit(): void {}


}
