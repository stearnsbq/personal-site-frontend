import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IArchive } from 'src/app/model/IArchive';
import { ITag } from 'src/app/model/ITag';
import { ApiService } from 'src/app/services/api.service';

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
  public tags?: ITag[];
  public archives?: IArchive[];

  constructor(public router: Router, public route: ActivatedRoute, private api: ApiService) {
   }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {

      this.api.getTags(params.year, params.month, params.day).subscribe(({data}) => {
        this.tags = data;
      })
  

    })


    this.api.getArchives().subscribe(({data}) => {
      this.archives = data;
    })

  }

  public gotoTag({tag}: ITag){
    this.router.navigate([], {relativeTo: this.route, queryParams: {tag}})
  }

}
