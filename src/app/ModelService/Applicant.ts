import { Manager } from "./Manager";
import { Skill } from "./Skill";

export class Applicant
{
constructor(email : string , title : string , experience :number,name : string , phone : string) 
{
        this.Experience = experience;
        this.Title = title;     
        this.Name = name;
        this.Active = true;
        this.Email = email;
        this.LockedBy = "";
        this.Phone = phone;
        this.Status = "";
        this.Skills = [];
        this.Recruiters = [];
        this.Url ="";
}



    Id :number;
    Name:string;
    Experience : number;
    Email:string;
    Phone : string;
    Status:string;
    Url : string;

    Active:boolean;
    LockedBy:string;
    Date : Date;
    Title : string;
    Skills : Skill [];
    Recruiters : Manager [];  
}
