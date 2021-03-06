import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'personal-site-frontend';
  public isAdmin;
  constructor(public router: Router){
    this.isAdmin = false;
    this.router.events.subscribe((event) => {
      this.isAdmin = router.url.includes('admin')
    })
    
  }


  ngOnInit(){

  }

}
