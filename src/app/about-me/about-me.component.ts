import { Component, OnInit } from '@angular/core';
import { IAboutMe } from '../model/IAboutMe';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public aboutMe! : IAboutMe;

  public readonly DATE_FORMAT = 'MMMM yyyy';

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getAboutMe().subscribe(({data}) => {
      this.aboutMe = data;
    })

  }

}
