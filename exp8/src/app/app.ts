import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fetchdata } from './fetchdata';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  userList: any[] = [];

  constructor(private fetchService: Fetchdata) {}

  ngOnInit(): void {
    this.fetchService.getUser().subscribe({
      next: (users) => (this.userList = users),
      error: (err) => console.error('HTTP Error:', err),
    });
  }
}
