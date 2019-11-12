import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = "http://localhost:8000/createblog";
  loginuser: any;
  
  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get(`http://localhost:8000/viewblog`);
  }

  public getupdate(id){
    return this.httpClient.get(`http://localhost:8000/blogedit/`+id);
  }

  public delblog(id){
    return this.httpClient.get('http://127.0.0.1:8000/blogdelete/'+ id);
  }


  public registerUsers(obj){
    return this.httpClient.post(this.baseUrl,obj, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).map(data=>
     data);
}


public updateUsers(obj){
  return this.httpClient.post('http://localhost:8000/blogedit',obj, {
    headers: new HttpHeaders({
         'Content-Type':  'application/json',
       })
  }).map(data=>
   data);
}

login(obj) {
  return this.httpClient.post<{access_token: string}>('http://localhost:8000/api/login',obj, {
    headers: new HttpHeaders({
         'Content-Type':  'application/json',
       })
  }).map(data=>
   data);


}

// login(email:string, password:string) {
//   return this.httpClient.post<{access_token:  string}>('http://localhost:8000/api/login', {email, password}).pipe(tap(res => {
//   localStorage.setItem('access_token', res.access_token);
// }))
// }

public register(obj){
  return this.httpClient.post<{access_token: string}>('http://localhost:8000/api/register',obj, {
    headers: new HttpHeaders({
         'Content-Type':  'application/json',
       })
  }).map(data=>
   data);
}
// register(email:string, password:string) {
//   return this.httpClient.post<{access_token: string}>('http://localhost:8000/api/register', {email, password}).pipe(tap(res => {
//   this.login(email, password)
// }))
// }

logout() {
 return localStorage.removeItem('access_token');
}

public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}
}