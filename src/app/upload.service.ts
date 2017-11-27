import { Injectable } from '@angular/core';
import { Upload } from './upload';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
@Injectable()
export class UploadService {
  constructor(private db: AngularFireDatabase) { }

  
  pushUpload(upload: Upload) {
    let url;
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`uploads/${upload.file.name}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot:any) =>  {
        // uthpload in progres
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload);
        console.log(upload.url);
      }     
    );       
    
  }
  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`uploads`).push(upload);
    localStorage.setItem('DURL',upload.url) ;
    
  }
}