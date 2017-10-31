import { DbService } from "app/DbService/DbService";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthService {

    constructor(private Service : DbService) {
        this.AuthState();
    }

    IsLogged = false;
    Role = false;
    

    AuthState() {
        return localStorage.getItem('Session');
    }

    RoleCheck() {
    const req = this.Service.GetUserState('ManagerLogins');
    req.map(res => <any>res.json()).
      subscribe(res => {
        console.log("Is Manager Loged ?");
        console.log(res);
        this.Role = res;  },
      (err: any) => {
        console.log("Error !");
        console.log(err.json());
        this.Role = false;
      });
  }
}





