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
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

                                                                       //מסכים נדרשים על פי איפיון
import { AddJobComponent } from './add-job/add-job.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { UpdateApplicantsComponent } from './update-applicants/update-applicants.component';
import { ApplicantsComponent } from "./applicants/applicants.component";
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
// import { AddApplicantComponent } from "./add-applicant/add-applicant.component";


const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'register',        component: RegisterComponent },
    
    
                                                             //מסכים נדרשים על פי איפיון
    // { path: 'add-applicants',component: AddApplicantComponent },
    { path: 'add-job',        component: AddJobComponent },
    { path: 'applicants',    component: ApplicantsComponent },
    { path: 'home',           component: HomeComponent },
    { path: 'jobs',           component: JobsComponent },
    { path: 'update-job',     component: UpdateJobComponent },
    { path: 'update-applicants',component: UpdateApplicantsComponent },
    { path: 'app-update-applicants',        component: UpdateApplicantsComponent },    
    { path: 'login',        component: LoginComponent },
    { path: 'add-applicant',        component: AddApplicantComponent },

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
