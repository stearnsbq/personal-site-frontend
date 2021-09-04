import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storage: StorageService, private router: Router) { }


  public login(username: string, password: string){
    return this.http.post(`${environment.apiURL}/login`, {username, password});
  }

  public logout(){
    this.storage.clear();
    this.router.navigate(['']);
  }

}
