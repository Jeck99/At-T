// import { Component, OnInit } from '@angular/core';
// import { Http, RequestOptions, HttpModule, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { DbService } from ".././DbService/DbService";
// import { Applicant } from "../ModelService/Applicant";

// @Component({
//   selector: 'app-add-applicant',
//   templateUrl: './add-applicant.component.html',
// })
// export class AddApplicantComponent1 implements OnInit {


//   constructor(public http: Http, 
//     private Service: DbService) { }
//  applicant: Applicant;
//  AllApplicants: any[];
 
//   ngOnInit() {
//     let req = this.Service.Get("Applicants")
//     req.subscribe(rsp => {
//       this.AllApplicants = rsp.json();

//     });
//   }
 
//   AddProductHandler(param: any) {
//     const applicant = {
//       apliplicantName: this.applicant.Name,
//       resume: "../assets/" + this.file.name,
//       exprience: this.applicant.Experience,
//       apliplicantEmail: this.applicant.Email,
//       Phone: this.applicant.Phone
//     }
//     const req = this.Service.post('admin', applicant);
//     req.subscribe(rsp => {
//       if (rsp.status === 201) {
//         console.log("success : " + rsp);
//       }
//       else {
//         console.log("server responded error : " + rsp);
//       }
//     }, (err) => { console.log("error : " + err); });
//     this.saveFile();

//     window.location.reload();

//   }
//   formData = new FormData();
//   options: any;
//   apiUrl: any;
//   file: File;
//   apiEndPoint: any;
//   changeFile(event: any) {
//     window.alert("change func");
//     let fileList: FileList = event.target.files;

//     if (fileList.length > 0) {
//       this.file = fileList[0];
//       this.formData.append('uploadFile', this.file, this.file.name);
//       let headers = new Headers()

//       this.options = new RequestOptions({ headers: headers });
//       this.apiUrl = "http://localhost:51210/api/UploadFile/";
//     }
//   }

//   saveFile() {
//     window.alert("save file");
//     this.http.post(this.apiUrl, this.formData, this.options)
//       // .map(res => res.json())
//       .catch(error => Observable.throw(error))
//       .subscribe(
//       data => console.log('success'),
//       error => console.log(error)
//       )
//   }
// }
