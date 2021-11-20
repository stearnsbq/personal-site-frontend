import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }



  public onSubmit(){ 
    
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.auth.login(username, password).subscribe(({data}) => {
      this.router.navigate(['/admin'])
    })
    
    
  }

}
