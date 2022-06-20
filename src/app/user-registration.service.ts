import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Observable } from 'rxjs';


import { Person } from './person';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  private url:string="http://localhost:8080/add";
  constructor(private http: HttpClient) { }
  public doRegistration(user: Person):Observable<any>{
      console.log(this.http.post("http://localhost:8080/add",user));
    return this.http.post("http://localhost:8080/add",user);
  }
  public getAllPersons():Observable<any>{
     return this.http.get("http://localhost:8080/persons");
  }
  public deletePerson(idd):Observable<any>{
    return this.http.delete("http://localhost:8080/persons/"+idd);
  }

}
