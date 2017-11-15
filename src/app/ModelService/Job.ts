import { Manager } from "./Manager";
import { Skill } from "./Skill";

export class Job {
    constructor(
        title: string, description: string,
        position: string) {
        this.Experience = 0;
        this.Title = title;
        this.Position = position;
        this.Description = description;
        this.Active = true;
        this.Published = true;
        this.Skills = [];
        this.Recruiters = [];
    }
    Id: number;
    Experience: number;
    Title: string;
    Position: string;
    Description: string;
    Active: boolean;
    Published: boolean;
    Skills: Skill[];
    Recruiters: Manager[];
}


