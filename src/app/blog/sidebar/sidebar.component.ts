import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: "0", overflow: "hidden" }),
            animate(50, style({ height: "*" }))
          ]
        ),
        transition(
          ':leave', 
          [
            animate(50, style({ height: 0, overflow: "hidden" }))
          ]
        )
      ]
    )
  ]
})
export class SidebarComponent implements OnInit {
  public selectedYear?: string;
  @Input() categories?: string[];
  @Input() archives?: {year: string, months: string[]}[];

  constructor(public router: Router, public route: ActivatedRoute) {
    this.archives = [{year: '2021', months: ['April', 'May']}, {year: '2020', months: ['November', 'May']}, {year: '2019', months: ['April', 'May']}];
    this.categories = ['software', 'security', 'angular'];
   }

  ngOnInit(): void {
  }

  public gotoCategory(category: string){
    this.router.navigate([], {relativeTo: this.route, queryParams: {category}})
  }

}
