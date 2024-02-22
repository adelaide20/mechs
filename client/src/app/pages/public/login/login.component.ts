import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('')
  });


  constructor(private router: Router, private alert: AlertService, private service: UserService) { }

  ngOnInit(): void {
  }

  login() {

    // input validation
    if (!this.form.valid) {
      this.alert.error('All fileds are required');
      return;
    }

    // object holding registration
    let user = {
      email: this.form.getRawValue().email,
      password: this.form.getRawValue().password
    };

    

    this.service.login(user).subscribe((res:any) => {
    
      this.alert.success(res.message);
      this.service.storeUser(res);

      
      if (res.user.role === "client") {
        this.router.navigate(['/client']);
      }
      else{
        alert("admin dashboard under construction")
      }
     
    },
      (error) => {        
        this.alert.error(error.error.message)
      })
  }
}
