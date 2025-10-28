import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination.html',
  styleUrls: ['./destination.css'],
})
export class Destination {
  selected: string = '';
  destinations: {
    [key: string]: string[]
  } = {
    Paris: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
    Tokyo: ['Tokyo Tower', 'Shinjuku Gyoen', 'Asakusa Temple'],
    NewYork: ['Statue of Liberty', 'Central Park', 'Times Square'],
  };
  selectDestination(destination: string) {
    this.selected = destination;
  }
}
