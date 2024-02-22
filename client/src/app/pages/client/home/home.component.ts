import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mechanic } from 'src/app/interfaces/mechanic';
import { AlertService } from 'src/app/services/alert.service';
import { MechanicService } from 'src/app/services/mechanic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mechanics:any = [] 

  searchTerm = '';

  constructor(private router:Router, private alert:AlertService, private service:MechanicService) { }

  ngOnInit(): void {
      this.service.allMechanics().subscribe((res:any)=>{
        this.mechanics = res
      })

  
      
  }



  mechanicProfile(id:any){

    let url = '/client/mechpro'

    localStorage.setItem('selectedMech', JSON.stringify (id));
    setTimeout(() => {
      this.router.navigate([url]);
    }, 500);
  }

}
