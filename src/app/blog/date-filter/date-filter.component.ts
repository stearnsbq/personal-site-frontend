import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss'],
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
export class DateFilterComponent implements OnInit {
  public selectedYear?: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
