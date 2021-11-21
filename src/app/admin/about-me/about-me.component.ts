import { Component, OnInit } from '@angular/core';
import { IAboutMe } from 'src/app/model/IAboutMe';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public aboutMe? : IAboutMe;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

}
