import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlogPostCard } from '../model/IBlogPostCard';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public posts? :IBlogPostCard[];
  constructor(private api: ApiService, public router: Router, public route: ActivatedRoute) {
  



    
   }

  ngOnInit(): void {


  }

}
