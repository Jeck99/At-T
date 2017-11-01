import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/index';
import { User } from '../_models/index';
import { AuthService } from "app/AuthService/Auth.Service";

@Component({
  moduleId: module.id,  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService , public AuthService : AuthService) {
  }

  ngOnInit() {
      this.loadAllUsers();
      this.AuthService.RoleCheck();
  }

  deleteUser(id: number) {
      this.userService.delete(id).subscribe(() => { this.loadAllUsers()});
  }

  private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
  }
}
