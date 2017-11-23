import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { FireConfig } from "./FireConfig/FireConfig";
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { HomeComponent } from './home/home.component';
// import { AddApplicantComponent } from "./add-applicant/add-applicant.component";
import { UpdateApplicantsComponent } from "./update-applicants/update-applicants.component";
import { UpdateJobComponent } from './update-job/update-job.component';
import { AddJobComponent } from './add-job/add-job.component';
import { JobsComponent } from './jobs/jobs.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// used to create fake backend
import { BaseRequestOptions } from '@angular/http';
import { JobPostComponent } from "./job-post-try/job-post.component";
import { AuthGuard } from "./_guards/auth.guard";
import { DbService } from "./DbService/DbService";
import { ApplicantsComponent } from "./applicants/applicants.component";
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
// import {UploadService} from '../upload.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { UploadService } from './upload.service';
import { AngularFireAuth } from "angularfire2/auth";
import { NotificationsService } from '../app/notifications/notifications.component';
import { ArchivesComponent } from './archives/archives.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { FileDropDirective } from './file-drop.directive';
import { TabsModule } from 'ngx-tabs';
import { Ng2TableModule } from 'ngx-datatable';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2CompleterModule } from "ng2-completer";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewComponent } from './new/new.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ApplicantDetailsComponent } from "./ApplicantDetails/ApplicantDetails.component";
import { JobDetailsComponent } from "./JobDetails/JobDetails.component";
import { InterviewSummeryComponent } from "./interview-summery/interview-summery.component";
import { ArraySortPipe } from "./Pipes/sort.pipe";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    UpgradeComponent,
    HomeComponent,
    ApplicantsComponent,
    // AddApplicantComponent,
    UpdateApplicantsComponent,
    UpdateJobComponent,
    AddJobComponent,
    JobsComponent,
    RegisterComponent,
    LoginComponent,
    JobPostComponent,
    AddApplicantComponent,
    ArchivesComponent,
    UploadFormComponent,
    FileDropDirective,
    NewComponent,
    RecruiterComponent,
    ApplicantDetailsComponent,
    JobDetailsComponent,
    InterviewSummeryComponent,
    

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FireConfig),
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule ,  
    TabsModule,
    NgxPaginationModule,
    Ng2TableModule,
    Ng2CompleterModule,
    Ng2SmartTableModule
  ],
  providers: [
    AuthGuard,
    DbService,
    UploadService,
    AngularFireAuth,
    AngularFireDatabase,
    NotificationsService,
    ArraySortPipe
    
],
  bootstrap: [AppComponent ],
  
})
export class AppModule  { 



}
