import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  //injected http client module
  constructor(private http:HttpClient) {
   }

   getEmployee():Observable<any>{
    const url='http://localhost:8035/employeeApi/employeeList';
    return this.http.get(url);
   }

   createNewEmployee(employee:Employee):Observable<any>{
    let url='http://localhost:8035/employeeApi/addNewEmployee';
    return this.http.post(url,employee,{responseType:'text'});
   }

   deleteEmployee(employee:Employee):Observable<any>{
     let url='http://localhost:8035/employeeApi/deleteEmployeeById';
     return this.http.delete(url+ "/"+ employee.id);
   }

   updateEmployee(employee:Employee):Observable<any>{
    let url = 'http://localhost:8035/employeeApi/updateEmployee';
    return this.http.put(url + "/" + employee.id,employee,{responseType:'json'});
  }
}
