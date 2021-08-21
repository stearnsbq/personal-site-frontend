import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin ,faDiscord, faSteam } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faGithub = faGithub
  faEnvelope = faEnvelope
  faLinkedIn = faLinkedin
  faDiscord = faDiscord
  faSteam = faSteam


  public today = Date.now()


  constructor() { }

  ngOnInit(): void {
  }

}
