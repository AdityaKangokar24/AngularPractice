import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})

//injecting employeeService
export class ViewEmployeeComponent implements OnInit {
  http: any;

  constructor(private employeeService:EmployeeService) { }

  editemployee:boolean=false;

  //employee array to store data
  employees:Employee[]=[];

  //creating an object
  emp:Employee=new Employee();

  ngOnInit(): void {

    this.employeeService.getEmployee().subscribe(
      data=>
      {
        this.employees=data;
      },
      error=>
      {
        console.log("error occurred",error);
      }
    );
  
  }

    deleteEmployee(employee:Employee):void{
      this.employeeService.deleteEmployee(employee).subscribe(
        data=>
        {
          this.employees=this.employees.filter(e=>e!==employee);
        }
      )
    }

    editEmployee(employee:Employee){
      this.editemployee=true;
      this.emp=employee;
      console.log(this.emp.id+' '+this.emp.name)

    }

    updateEmployee(employee:Employee)
    {
      this.editemployee=true;
    
      this.employeeService.updateEmployee(this.emp).subscribe(
        data=>
        {
            this.emp=employee;
            console.log(this.emp.id +' '+ this.emp.name +" "+this.emp.salary );
            this.editemployee=false;
  
        },
        error=>
        {
          console.log("error errored ",error);
          
        }
      )
  
    }

  }
