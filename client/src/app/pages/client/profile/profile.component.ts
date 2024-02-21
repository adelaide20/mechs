import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:any;
  cars:any;

  constructor(private router: Router, private alert: AlertService, private carServ:ClientService) { }

  ngOnInit(): void {
     // get the user details
     this.user = JSON.parse(window.localStorage.getItem('user') || '');

     let client_id = this.user.user.id
     
     this.carServ.getCars(client_id).subscribe(res => {
      this.cars = res
      console.log(this.cars);
      
    })
     
  }


  logout() {
    localStorage.clear
    this.alert.success("Logged out successfully");
    this.router.navigate(['/landing']);
  }

}
