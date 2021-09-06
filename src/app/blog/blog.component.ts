import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private api: ApiService, public router: Router) {
    this.api.getBlogPosts(1, '', 2021, 4, 24, 'big-ass-quad');
   }

  ngOnInit(): void {
  }

}
