import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../AuthService/Auth.Service";
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Dashboard',  icon: 'dashboard', class: '' ,  },
    { path: 'applicants', title: 'applicants',  icon:'content_paste', class: '' },
    { path: 'jobs', title: 'jobs',  icon:'library_books', class: '' },
    // { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: 'app-archives', title: 'Archive',  icon:'folder open', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[AuthService]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
Currentuser = "";
  constructor() {}

  ngOnInit() {
      this.Currentuser = localStorage.getItem("un");
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
