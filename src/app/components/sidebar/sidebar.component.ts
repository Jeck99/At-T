import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../AuthService/Auth.Service";
import { SearchService } from 'app/search.service';
import { DbService } from 'app/DbService/DbService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { window } from 'rxjs/operator/window';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    Role: boolean;
}
export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Dashboard', icon: 'dashboard', class: '', Role: true },
    { path: 'app-interview-summery', title: 'summery', icon: 'person', class: '', Role: true },
    
    { path: 'applicants', title: 'applicants', icon: 'content_paste', class: '', Role: true },
    { path: 'jobs', title: 'jobs', icon: 'library_books', class: '', Role: true },
    { path: 'app-recruiter', title: 'Recruiters',  icon:'notifications', class: '', Role: true  },
    // { path: 'user-profile', title: 'User Profile', icon: 'person', class: '', Role: true },
    { path: 'app-archives', title: 'Archive', icon: 'folder open', class: '', Role: false },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    providers: [AuthService,SearchService,DbService]
})
export class SidebarComponent implements OnInit {

    constructor(private AuthService: AuthService,private ser : SearchService,private Service: DbService) {
    }
    AllApplicants: any;
    menuItems: any[];
    Currentuser = "";
    bool;
    KeyWord="";

    searchassembley(event : any)
    {
      this.ser.updateData(event.target.value)
    }
    ngOnInit() {
        this.Currentuser = localStorage.getItem("un");
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        console.log('this.AuthService.Role:', this.AuthService.Role)
        
    //         if (this.AuthService.Role) {
    //             this.menuItems.forEach((item: RouteInfo) => {
    //                 item.Role = true;
    //             })      
    // }
             console.log(this.menuItems)   
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
