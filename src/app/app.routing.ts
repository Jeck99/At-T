import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

                                                                       //מסכים נדרשים על פי איפיון
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { UpdateApplicantsComponent } from './update-applicants/update-applicants.component';
import { ApplicantsComponent } from "./applicants/applicants.component";
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
import { AuthGuard } from './_guards/auth.guard';
import { ArchivesComponent } from './archives/archives.component';
import { RecruiterComponent } from "./recruiter/recruiter.component";
import { LoginAuthGuard } from "./_guards/login.guard";
import { InterviewSummeryComponent } from "./interview-summery/interview-summery.component";
// import { AddApplicantComponent } from "./add-applicant/add-applicant.component";


const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent , canActivate : [AuthGuard] },
    { path: 'user-profile',   component: UserProfileComponent  , canActivate : [AuthGuard]  },
    { path: 'table-list',     component: TableListComponent , canActivate : [AuthGuard]  },
    { path: 'typography',     component: TypographyComponent , canActivate : [AuthGuard]  },
    { path: 'icons',          component: IconsComponent  , canActivate : [AuthGuard] },
    { path: 'maps',           component: MapsComponent , canActivate : [AuthGuard]  },
    // { path: 'notifications',  component: NotificationsComponent  , canActivate : [AuthGuard] },
    { path: 'upgrade',        component: UpgradeComponent  , canActivate : [AuthGuard] },
    { path: 'register',        component: RegisterComponent  , canActivate : [AuthGuard] },
    
    
                                                             //מסכים נדרשים על פי איפיון
    { path: 'app-recruiter',component: RecruiterComponent, canActivate : [AuthGuard]  },
    { path: 'applicants',    component: ApplicantsComponent , canActivate : [AuthGuard]},
    { path: 'home',           component: HomeComponent , canActivate : [AuthGuard]  },
    { path: 'jobs',           component: JobsComponent , canActivate : [AuthGuard]  },
    { path: 'update-job',     component: UpdateJobComponent , canActivate : [AuthGuard]  },
    { path: 'update-applicants',component: UpdateApplicantsComponent , canActivate : [AuthGuard]  },
    { path: 'app-update-applicants',        component: UpdateApplicantsComponent , canActivate : [AuthGuard]  },    
    { path: 'login',        component: LoginComponent   , canActivate : [LoginAuthGuard]  },
    { path: 'add-applicant',        component: AddApplicantComponent , canActivate : [AuthGuard]  },
    { path: 'app-archives',        component: ArchivesComponent , canActivate : [AuthGuard]  },
    { path: 'app-interview-summery', component: InterviewSummeryComponent , canActivate : [AuthGuard]  },
    
      { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
