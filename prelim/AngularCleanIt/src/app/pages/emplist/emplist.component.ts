import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-emplist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './emplist.component.html',
  styleUrl: './emplist.component.css'
})
export class EmplistComponent {
  emplist = [
    
      { empNumber: 101, fullName: 'John Doe', gender: 'Male', email: 'john.doe@example.com', employmentStatus: 'Full-time', salary: 50000 },
      { empNumber: 102, fullName: 'Jane Smith', gender: 'Female', email: 'jane.smith@example.com', employmentStatus: 'Part-time', salary: 30000 },
      { empNumber: 103, fullName: 'Sam Johnson', gender: 'Male', email: 'sam.johnson@example.com', employmentStatus: 'Contract', salary: 40000 },
      { empNumber: 104, fullName: 'Mary Lee', gender: 'Female', email: 'mary.lee@example.com', employmentStatus: 'Full-time', salary: 55000 },
      { empNumber: 105, fullName: 'Jake Williams', gender: 'Male', email: 'jake.williams@example.com', employmentStatus: 'Part-time', salary: 25000 },
      { empNumber: 106, fullName: 'Emily Davis', gender: 'Female', email: 'emily.davis@example.com', employmentStatus: 'Full-time', salary: 60000 },
      { empNumber: 107, fullName: 'David Brown', gender: 'Male', email: 'david.brown@example.com', employmentStatus: 'Contract', salary: 45000 },
      { empNumber: 108, fullName: 'Sophia Wilson', gender: 'Female', email: 'sophia.wilson@example.com', employmentStatus: 'Full-time', salary: 52000 },
      { empNumber: 109, fullName: 'James Taylor', gender: 'Male', email: 'james.taylor@example.com', employmentStatus: 'Part-time', salary: 28000 },
      { empNumber: 110, fullName: 'Olivia Harris', gender: 'Female', email: 'olivia.harris@example.com', employmentStatus: 'Full-time', salary: 65000 }
  ];

  selectedStatus: string = 'All';

  get filteredEmployees() {
    if (this.selectedStatus === 'All') {
      return this.emplist;
    }
    return this.emplist.filter(employee => employee.employmentStatus === this.selectedStatus);
  }

  empStatus = ['All','Full-time','Part-time','Contract'];

}
