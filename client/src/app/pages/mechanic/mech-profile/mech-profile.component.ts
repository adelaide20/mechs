import { Component, OnInit } from '@angular/core';
import { MechanicService } from 'src/app/services/mechanic.service';

@Component({
  selector: 'app-mech-profile',
  templateUrl: './mech-profile.component.html',
  styleUrls: ['./mech-profile.component.scss']
})
export class MechProfileComponent implements OnInit {

  mech_id: any;

  mechanic: any;

  constructor(private service: MechanicService) { }

  ngOnInit(): void {
    this.mech_id = JSON.parse(window.localStorage.getItem('selectedMech') || '');


    console.log(this.mech_id);

    this.service.oneMechanic(this.mech_id).subscribe(res => {
      this.mechanic = res
      console.log(this.mechanic);
      console.log(this.mechanic.foundData.mechanic);
    })

  }

}
