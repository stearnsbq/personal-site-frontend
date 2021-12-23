import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IBlogPost } from 'src/app/model/IBlogPost';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  faEdit = faEdit;
  faDelete = faTrash;

  public posts?: IBlogPost[];

  constructor(private api: ApiService, public route: ActivatedRoute, private router: Router) {

    console.log(route)

   }

  ngOnInit(): void {

    this.api.getBlogPosts().subscribe((result) => {
      this.posts = result;
    })

  }

}
