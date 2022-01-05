import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAboutMe } from '../model/IAboutMe';
import { IArchive } from '../model/IArchive';
import { IBlogPost } from '../model/IBlogPost';
import { IBlogPostCard } from '../model/IBlogPostCard';
import { IProjectCard } from '../model/IProjectCard';
import { IResponse } from '../model/IResponse';
import { ITag } from '../model/ITag';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public async updateBlogPost(postID: string, {title, description, image, tags, content}: IBlogPost){


    if(typeof image === 'object'){
      return await this.uploadBlogImage(postID, image as any).toPromise();
    }

    return this.http.put<IResponse<IBlogPost>>(`${environment.apiURL}/blog/post/${postID}`, {title, description, tags, content}).toPromise();

    //return this.http.put<IResponse<IBlogPost>>(`${environment.apiURL}/blog/post/${postID}`, post);
  }

  public getArchives(){
    return this.http.get<IResponse<IArchive[]>>(`${environment.apiURL}/blog/archives`);
  }

  public getTags(year?: string, month?: string, day?: string){
    let params = new HttpParams();

    if(year){
      params = params.set('year', year);
    }

    if(month){
      params = params.set('month', month);
    }

    if(day){
      params = params.set('day', day);
    }




    return this.http.get<IResponse<ITag[]>>(`${environment.apiURL}/blog/tags`, {params});
  }

  public updateAboutMe(model: IAboutMe){
    return this.http.put<IResponse<IAboutMe>>(`${environment.apiURL}/about`, model);
  }

  public getAboutMe(){
    return this.http.get<IResponse<IAboutMe>>(`${environment.apiURL}/about`)
  }

  public getProjects(search?: string, page = 0){
    let params = new HttpParams().set('page', page);

    if(search){
      params = params.set('search', search)
    }

    return this.http.get<IResponse<IProjectCard[]>>(`${environment.apiURL}/projects/`, {params});
  }


  public getBlogPost(year: number, month: number, day: number, title: string){
     return this.http.get<IResponse<IBlogPost>>(`${environment.apiURL}/blog/posts/${year}/${month}/${day}/${title}`);
  }

  public getBlogPostByID(post: string){
    return this.http.get<IResponse<IBlogPost>>(`${environment.apiURL}/blog/post/${post}`);
  }

  private uploadBlogImage(postID: string, image: File){
    const params = new HttpParams().set('post', postID);

    const multiPart = new FormData();

    multiPart.append('image', image);

    return this.http.post<IResponse<IBlogPost>>(`${environment.apiURL}/blog/image`, multiPart, {params});
  }

  public async createBlogPost({title, description, tags, image, content}: any){

    const {data} = await this.http.post<IResponse<IBlogPost>>(`${environment.apiURL}/blog`, {title, description, tags, content}).toPromise();

    const id = data._id;

    return await this.uploadBlogImage(id, image).toPromise();
  }

  public getBlogPosts(
    page: number = 1,
    search?: string,
    tag?: string,
    year?: number,
    month?: number,
    day?: number
  ) {
    const path = [year, month, day].reduce(
      (accum, val) => (accum += val ? `${val}/` : ''),
      '/'
    );

    let params = new HttpParams();

    if (tag) {
      params = params.append('tag', tag);
    }

    if (search) {
      params = params.append('search', search);
    }

    params = params.append('page', page);

    return this.http.get<IResponse<IBlogPostCard[]>>(`${environment.apiURL}/blog/posts${path}`, {params});
  }
}
