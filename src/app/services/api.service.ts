import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBlogPostCard } from '../model/IBlogPostCard';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  public getBlogPosts(page: number = 1, search?: string, category?: string, year?: number, month?: number, day?: number, title?: string){

    const path = [year, month, day, title].reduce((accum, val) => accum += val ? `${val}/`: '', '/')

    console.log(path)

    let params = new HttpParams();

    if(category){
      params = params.append('category', category);
    }

    if(search){
      params = params.append('search', search);
    }

    params = params.append('page', page);
    return of([]);
   // return this.http.get<IBlogPostCard[]>(`${environment.apiURL}/posts${path}`, {params});
  }


}
