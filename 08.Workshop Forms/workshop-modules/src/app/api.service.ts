import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  
  getThemes(){
    const api= environment.apiUrl;
    
    return this.http.get<Theme[]>(`${api}/themes`);
  }

  getTheme(id:string){
    const {apiUrl}=environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`)
  }

  createTheme(themeName:string, themeText:string){
    const {apiUrl} = environment
    const playload = {themeName, themeText}
    return this.http.post<Theme>(`${apiUrl}/themes`, playload)
  }

  getPosts(limit?:number){
    const api = environment.apiUrl;

    let url = `${api}/posts`
    if(limit){
      url += `?limit=${limit}`
    }

    return this.http.get<Post[]>(url);
  }


}
