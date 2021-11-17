import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProjectCard } from 'src/app/model/IProjectCard';
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
    this.projects = await this.api.getProjects().toPromise();
  }

  public gotoProject(project: IProjectCard){
      this.router.navigate(['/projects', project.title.replace(/\s/g, '-')])
  }

}
