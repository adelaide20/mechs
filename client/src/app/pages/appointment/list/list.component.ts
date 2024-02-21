
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  appointments :any = [];
  client_id: any;


  constructor(private carServ: ClientService, private alert:AlertService, private router:Router) { }

  ngOnInit(): void {

    // get the client id
    let client = JSON.parse(window.localStorage.getItem('user') || '');

    this.client_id = client.user.id

    this.carServ.getAppointments(this.client_id).subscribe(res=>{
      this.appointments = res
      console.log(this.appointments);
      
    })
  }


  // cabcel appointment
  cancelApp(){

  }

}
