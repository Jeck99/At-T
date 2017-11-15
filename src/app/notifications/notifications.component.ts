import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
    @Input() typeColor;
    possX: string;
    possY: string;
    color: string;
    _massage: string;
    ngOnInit() {
        if (!this.typeColor) {
            this.possX = "bottom";
            this.possY = "right";
            this.color = 'warning';
            this._massage = "There is seem to be <br/> a problom pleas try again ."
        }
        else {
            this.possX = "top";
            this.possY = "center";
            this.color = 'success';
            this._massage = "Request recived and done ."
        }
        $.notify({
            
            icon: "notifications",
            message: this._massage
        }, {
                type: this.color,
                timer: 2000,
                placement: {
                    from: this.possX,
                    align: this.possY
                }
                            
            });  console.log(this.typeColor); 
    }
    constructor() { }
    // showNotification(from, align) {
    //     //    const type = ['success','warning']; 
    //     // this.possX=from;
    //     // this.possY=align;
    //     $.notify({
    //         icon: "notifications",
    //         message: "There is seem to be <b> a problom pleas try again ."
    //     }, {
    //             type: this.color,
    //             timer: 4000,
    //             placement: {
    //                 from: this.possX,
    //                 align: this.possY
    //             }
    //         });
    // }
}
