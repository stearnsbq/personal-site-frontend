import { trigger, transition, style, animate } from '@angular/animations';
import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  faSearch = faSearch

  constructor(private router: Router, private route: ActivatedRoute) { 
  }

  onSearch(search: string){
    this.router.navigate([], {relativeTo: this.route, queryParams: {search}})
  }

  ngOnInit(): void {
  }

}
