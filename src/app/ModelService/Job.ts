export class Job
{

    constructor(experience: number , title: string, description: string , position : string) {

        this.Experience = experience;
        this.Title = title;     
           this.Position = position;
        this.Description = description;     
           this.Active = true;
        this.Published = false;
    }


    Id :number;
    Experience : number;
    Title:string;
    Position : string;
    Description:string;
    Active:boolean;
    Published:boolean;
}
        
    
