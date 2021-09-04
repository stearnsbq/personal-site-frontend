import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public set(key: string, value: any) {
    localStorage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value)
    );
  }

  public get(key: string) {
    return localStorage.getItem(key);
  }


  public has(key: string){
    return !!localStorage.getItem(key);
  }

  public delete(key: string){
    localStorage.removeItem(key);
  }

  public clear(){
    localStorage.clear();
  }



}
