import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  cars: any;
  client_id: any


  form = new FormGroup({
    make: new FormControl(''),
    model: new FormControl(''),
    registration: new FormControl(''),
    fuel_type: new FormControl('')
  });

  constructor(private router: Router, private alert: AlertService, private carServ: ClientService) { }

  ngOnInit(): void {
    // get the user details
    this.user = JSON.parse(window.localStorage.getItem('user') || '');

    this.client_id = this.user.user.id

    this.carServ.getCars(this.client_id).subscribe(res => {
      this.cars = res
      console.log(this.cars);

    })

  }

  addCar() {
    // input validation
    if (!this.form.valid) {
      this.alert.error('All fileds are required');
      return;
    }

    // object holding registration
    let car = {
      _id: this.client_id,
      make: this.form.getRawValue().make,
      model: this.form.getRawValue().model,
      registration: this.form.getRawValue().registration,
      fuel_type: this.form.getRawValue().fuel_type
    };

  this.carServ.addCar(car).subscribe((res:any)=>{
    this.alert.success(res.message);
  
    this.router.navigate(['/dash/profile']);
  })
    

  }

  logout() {
    localStorage.clear()
    this.alert.success("Logged out successfully");
    this.router.navigate(['/landing']);
  }

}
