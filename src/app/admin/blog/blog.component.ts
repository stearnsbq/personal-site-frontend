import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Quill from 'quill';
import { IBlogPost } from 'src/app/model/IBlogPost';
import { IBlogPostCard } from 'src/app/model/IBlogPostCard';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  faEdit = faEdit;
  faDelete = faTrash;

  public posts?: IBlogPostCard[];

  constructor(private api: ApiService, public route: ActivatedRoute, private router: Router) {


   }

  ngOnInit(): void {

    this.api.getBlogPosts().subscribe((result) => {
      this.posts = result.data;
      console.log(this.posts)
    })

  }

}
