import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public routes: any

  constructor(public route: ActivatedRoute) { 
      this.routes = route.routeConfig?.children?.slice(1)
  }

  ngOnInit(): void {
  }

}
