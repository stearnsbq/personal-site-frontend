import { Component, Input, OnInit } from '@angular/core';
import { IBlogPostCard } from 'src/app/model/IBlogPostCard';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() posts!: IBlogPostCard[] | any[];

  constructor() { }

  ngOnInit(): void {
  }

}
