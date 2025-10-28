import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Destination } from '../destination/destination';
import { Booking } from '../booking/booking';
export const routes: Routes = [
  {path:"", component:Home},
  {path:"destinations", component:Destination},
  {path:"bookings", component:Booking}
];
