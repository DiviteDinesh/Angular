import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from '../student/student';
import { Faculty } from '../faculty/faculty';
@Component({
  selector: 'app-root',
  imports: [Student, Faculty],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exp2');
}
