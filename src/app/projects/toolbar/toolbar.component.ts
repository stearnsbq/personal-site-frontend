import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  faSearch = faSearch
  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  public onSearch(query: string){
    this.router.navigate(['/projects'], {queryParams: {search: query}})

  }

}
