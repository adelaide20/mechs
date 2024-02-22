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

    this.service.oneMechanic(this.mech_id).subscribe(res => {
      this.mechanic = res
    })

  }

}
