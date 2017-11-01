import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/AuthService/Auth.Service";
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'appliecants', title: 'appliecants',  icon:'content_paste', class: '' },
    { path: 'jobs', title: 'jobs',  icon:'library_books', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'user-profile', title: 'User Profile',  icon:'person', class: '' },
    
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
<<<<<<< HEAD
Currentuser = "";
  constructor() { }

  ngOnInit() {
      this.Currentuser = localStorage.getItem("un");
    this.menuItems = ROUTES.filter(menuItem => menuItem);
=======
  role:any;
  
  constructor(private AuthService : AuthService)
   {
       this.role=AuthService.Role 
}

  ngOnInit() {
      if(this.role){
          console.log(this.role);
          
    this.menuItems = ROUTES.filter(menuItem => menuItem);          
      }

>>>>>>> fae5b50d681c9afa2f6291483676de30ddb55f5f
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
