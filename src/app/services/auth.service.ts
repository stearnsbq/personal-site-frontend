import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: any;


  constructor(private http: HttpClient, private storage: StorageService, private router: Router, private jwt: JwtHelperService) { }


  public login(username: string, password: string){
    return this.http.post(`${environment.apiURL}/auth/login`, {username, password}).pipe(tap(({data} : any) => {

      this.storage.set('access_token', data);
      this._user = this.jwt.decodeToken(data);

    }));
  }

  public logout(){
    this.storage.clear();
    this.router.navigate(['']);
  }


  public isLoggedIn(){
    return this.storage.has('access_token') && !this.jwt.isTokenExpired(this.storage.get('access_token')!)
  }

  public get user(): any {
    if(!this._user && this.isLoggedIn){
      this._user = this.jwt.decodeToken(this.storage.get('access_token')!);
    }
    return this._user;
  }
  public set user(value: any) {
    this._user = value;
  }


}
