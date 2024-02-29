import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  car: any;

  client_id: any;

  mech_id: any;


  form = new FormGroup({
    car: new FormControl(''),
    service_type: new FormControl(''),
    details: new FormControl(''),
    date_time: new FormControl(''),
  });

  constructor(private carServ: ClientService, private alert: AlertService, private router: Router) { }

  ngOnInit(): void {

    // get the client id
    let client = JSON.parse(window.localStorage.getItem('user') || '');

    this.client_id = client.user.id




    // get the client id
    this.mech_id = JSON.parse(window.localStorage.getItem('selectedMech') || '');


    this.carServ.getCars(this.client_id).subscribe(res => {
      this.car = res
    })

  }


  save() {
    if (!this.form.getRawValue()) {
      this.alert.error('All fileds are required');
      return;
    }


    // object holding registration
    let appointment = {
      _client: this.client_id,
      _car: this.form.getRawValue().car,
      _mechanic: this.mech_id,
      service_type: this.form.getRawValue().service_type,
      details: this.form.getRawValue().details,
      date_time: this.form.getRawValue().date_time
    };

    this.carServ.makeAppointment(appointment).subscribe((res: any) => {

      this.alert.success(res.message);
      this.router.navigate(['/client/apps']);
    },
      (error) => {
        this.alert.error(error.error.message)
      })

  }
}
