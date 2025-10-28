import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-faculty',
  imports: [FormsModule, CommonModule],
  templateUrl: './faculty.html',
  styleUrl: './faculty.css',
})
export class Faculty {
  registerFacult(){
    alert("Faculty registered succesfully")
  }
}
