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
    { path: 'home', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'applicants', title: 'applicants',  icon:'content_paste', class: '' },
    { path: 'jobs', title: 'jobs',  icon:'library_books', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: 'update-job', title: 'Testing(Update-Job)',  icon:'person', class: '' },
    { path: 'app-update-applicants', title: 'Testing(Update-Applicants)',  icon:'person', class: '' },
    { path: 'add-applicant', title: 'Testing(Add-Applicant)',  icon:'person', class: '' },
    
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
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
  constructor() { }

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
