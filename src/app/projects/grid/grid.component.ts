import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProjectCard } from 'src/app/model/IProjectCard';
import { IResponse } from 'src/app/model/IResponse';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public projects?: IProjectCard[]

  constructor(private api: ApiService, private router: Router) { }

 async ngOnInit() {
    this.api.getProjects().subscribe(({data}) => {
      this.projects = data;
    })
  }

  public gotoProject(project: IProjectCard){
    window.open(project.githubURL, '_blank');
  }

}
