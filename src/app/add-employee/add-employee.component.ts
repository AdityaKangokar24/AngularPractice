import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  emp:Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  createEmployee() {
    this.employeeService.createNewEmployee(this.emp).subscribe(
      data => {
        alert("employee added");
        this.router.navigateByUrl("view");
      },
      error => {
        console.log("Error occured",error);
      }
    );
  }
}
