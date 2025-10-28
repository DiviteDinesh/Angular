import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-applicant',
  imports: [FormsModule, CommonModule],
  templateUrl: './applicant.html',
  styleUrl: './applicant.css',
})
export class Applicant {
  submitted=false;
  fullName="";
  position="";
  experience = '';
  department = '';
  location = '';
  contact = '';
  registerApplicant(){
    this.submitted=true;
  }
}
