import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  constructor(private http: HttpClient) { }

  // get all mechanics
  allMechanics(){
    return this.http.get(`${environment.SERVER_URL}` + '/mech/all')
  }


  // get one mechanic
  oneMechanic(mech_id: any){
    return this.http.get(`${environment.SERVER_URL}` + '/mech/one/' + mech_id)
  }
}
