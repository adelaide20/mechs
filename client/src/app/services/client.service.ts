import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Appointment } from '../interfaces/appointment';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  // add a car
  addCar(car: Car) {
    return this.http.post(`${environment.SERVER_URL}` + '/client/add', car);
  }

  // get all cars for a spefic client
  getCars(client: any) {
    return this.http.get(`${environment.SERVER_URL}` + '/client/all/' + client);
  }

  // get one car
  getCar(car: any) {
    return this.http.get(`${environment.SERVER_URL}` + '/client/one/' + car);
  }

  // make appointment
  makeAppointment(appointment: Appointment) {
    return this.http.post(`${environment.SERVER_URL}` + '/client/app/create', appointment);
  }

  // get all appointments for a specific client
  getAppointments(client: any) {
    return this.http.get(`${environment.SERVER_URL}` + '/client/app/all/' + client);
  }
}
