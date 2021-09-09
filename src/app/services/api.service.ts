import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBlogPostCard } from '../model/IBlogPostCard';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getBlogPosts(
    page: number = 1,
    search?: string,
    category?: string,
    year?: number,
    month?: number,
    day?: number,
    title?: string
  ) {
    const path = [year, month, day, title].reduce(
      (accum, val) => (accum += val ? `${val}/` : ''),
      '/'
    );

    console.log(path);

    let params = new HttpParams();

    if (category) {
      params = params.append('category', category);
    }

    if (search) {
      params = params.append('search', search);
    }

    params = params.append('page', page);
    return of(new Array(9).fill(      {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet quam arcu, quis facilisis quam imperdiet at. Sed in dignissim nunc.',
      created: '2021-09-09T00:57:10Z',
      lastUpdated: '2021-09-09T00:57:10Z',
      timeToRead: '5 min',
      image: 'https://via.placeholder.com/1024',
    }));
    // return this.http.get<IBlogPostCard[]>(`${environment.apiURL}/posts${path}`, {params});
  }
}
