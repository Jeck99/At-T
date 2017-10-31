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
import { AddAppliecantsComponent } from './add-appliecants/add-appliecants.component';
import { AddJobComponent } from './add-job/add-job.component';
import { AppliecantsComponent } from './appliecants/appliecants.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { UpdateAppliecantsComponent } from './update-appliecants/update-appliecants.component';


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
    { path: 'login',        component: LoginComponent },
    
                                                             //מסכים נדרשים על פי איפיון
    { path: 'add-appliecants',component: AddAppliecantsComponent },
    { path: 'add-job',        component: AddJobComponent },
    { path: 'appliecants',    component: AppliecantsComponent },
    { path: 'home',           component: HomeComponent },
    { path: 'jobs',           component: JobsComponent },
    { path: 'update-job',     component: UpdateJobComponent },
    { path: 'update-appliecants',component: UpdateAppliecantsComponent },

      { path: '', redirectTo: 'home', pathMatch: 'full' }
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
