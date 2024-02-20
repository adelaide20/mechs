import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    contact_no: new FormControl(''),
    location: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('')
  });

  constructor(private router:Router, private alert:AlertService, private service:UserService) { }

  ngOnInit(): void {
  }

  register(){

    // input validation
    if (!this.form.valid) {
      this.alert.error('All fileds are required');
      return;
    }

    // object holding registration
    let user = {
      full_name: this.form.getRawValue().first_name + " " + this.form.getRawValue().last_name,
      email: this.form.getRawValue().email,
      contact_no: this.form.getRawValue().contact_no,
      location: this.form.getRawValue().location,
      password: this.form.getRawValue().password,
      role: this.form.getRawValue().role
    }; 

    // registration function

    this.service.register(user).subscribe((res:any)=>{
      this.alert.success(`${res.message} "\n" Welcome ${res.full_name}`);
      this.service.storeUser(res);
      this.router.navigate(['/dash']);
    },
    (error) =>
      {
        this.alert.error(error.error.message)
      })
   
  }

}
