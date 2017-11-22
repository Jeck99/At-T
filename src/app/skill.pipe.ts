import { Pipe, PipeTransform, transition } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Applicant } from 'app/ModelService/Applicant';
import { retry } from 'rxjs/operator/retry';

@Pipe({
  name: 'skill'
})
export class SkillPipe implements PipeTransform {

  transform(applicants :  any[],skills: any []){
    console.log("start",applicants);
    if (!applicants) return applicants;
    if(skills==[]) return applicants;
    // console.log("end",applicants.filter(app=>  this.IsMatch(app.Skills,skills)));
    

    return applicants.filter(app=> this.IsMatch(app.Skills,skills));

  }


  IsMatch(Appskills:any [],skill:any[]) : boolean
  {  
    let Match =true;
    let filter = -1;

    
    for (let index = 0; index < Appskills.length; index++) {
      debugger;
      let filter = skill.indexOf(Appskills[index]);
      if(skill.indexOf(Appskills[index])  > -1 ==false)
      {
        Match = false;
        break
      }
    }


    return Match;
  }

}
