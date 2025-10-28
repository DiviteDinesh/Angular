import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faculty',
  imports: [CommonModule, FormsModule],
  templateUrl: './faculty.html',
  styleUrl: './faculty.css',
})
export class Faculty {
  selectedDept = '';
  selectedGender = '';
  facultyList = [
    {
      name: 'Dr. N. Kasiviswanath',
      dept: 'CSE',
      email: 'hod.cse@gprec.ac.in',
      gender: 'Male',
      photo: 'assets/hod.png',
    },
    {
      name: 'Smt. D.L.N.Prasunna',
      dept: 'CSE',
      email: 'prasunna.cse@gprec.ac.in',
      gender: 'Female',
      photo: 'assets/DLN.png',
    },
    {
      name: 'Smt. T. chandana',
      dept: 'ECS',
      email: 'chandana.ecs@gprec.ac.in',
      gender: 'Female',
      photo: 'assets/chandana.png',
    },

    {
      name: 'Dr. R. Praveen Sam',
      dept: 'ECS',
      email: 'hod.ecs@gprec.ac.in',
      gender: 'Male',
      photo: 'assets/praveen.png',
    },
    {
      name: 'Smt. Srilakshmi',
      dept: 'CSE',
      email: 'srilakshmi.cse@gprec.ac.in',
      gender: 'Female',
      photo: 'assets/srilakshmi.png',
    },
  ];
  get filteredFaculty() {
    return this.facultyList.filter(
      (f) =>
        (this.selectedDept ? f.dept === this.selectedDept : true) &&
        (this.selectedGender ? f.gender === this.selectedGender : true)
    );
  }
}
