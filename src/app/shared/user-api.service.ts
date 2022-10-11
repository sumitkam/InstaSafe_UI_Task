import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAPiService {

  constructor(private http: HttpClient) { }

  postUserData(data:any){
    return  this.http.post<any>('http://localhost:3000/User',data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getUserData(){
    return  this.http.get<any>('http://localhost:3000/User')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateUserData(data:any,id:number){
    return  this.http.put<any>('http://localhost:3000/User/'+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteUserData(id:any){
    return  this.http.delete<any>('http://localhost:3000/User/'+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
