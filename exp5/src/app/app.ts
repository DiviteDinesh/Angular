import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Faculty } from '../faculty/faculty';


@Component({
  selector: 'app-root',
  imports: [CommonModule,Faculty],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  protected title = 'EXP-5-List';
}
