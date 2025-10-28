import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FetchData } from '../fetch-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  userList: any[] = [];

  constructor(private fetchService: FetchData) {}

  ngOnInit(): void {
    this.fetchService.getUsers().subscribe((data) => {
      this.userList = data;
      console.log('feteched Users: ', data);
    });
  }
}
