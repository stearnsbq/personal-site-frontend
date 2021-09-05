import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations:[
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ width: "0", overflow: "hidden" }),
            animate(150, style({ width: "*" }))
          ]
        ),
        transition(
          ':leave', 
          [
            animate(150, style({ width: "0", overflow: "hidden" }))
          ]
        )
      ]
    )
  ]
})
export class ToolbarComponent implements OnInit {
  faSearch = faSearch
  public showSearch : boolean;

  constructor() { 
    this.showSearch = false;
  }

  ngOnInit(): void {
  }

}
