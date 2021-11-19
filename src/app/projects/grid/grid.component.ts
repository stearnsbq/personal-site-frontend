import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProjectCard } from 'src/app/model/IProjectCard';
import { IResponse } from 'src/app/model/IResponse';
import { ApiService } from 'src/app/services/api.service';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public projects?: IProjectCard[]

  faCodeBranch = faCodeBranch
  faStar = faStar

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

 async ngOnInit() {
    this.api.getProjects().subscribe(({data}) => {
      this.projects = data;
    })


    this.route.queryParams.subscribe(({search}) => {

      this.api.getProjects(search).subscribe(({data}) => {
        this.projects = data;
      })
  

    })

  }

  public gotoProject(project: IProjectCard){
    window.open(project.githubURL, '_blank');
  }


}
