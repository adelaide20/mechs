import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userInfo?: User;

  constructor(private http: HttpClient) { }


  register(user: User) {
    return this.http.post(`${environment.SERVER_URL}` + '/auth/register', user);
  }


  login(user: User) {
    return this.http.post(`${environment.SERVER_URL}` + '/auth/login', user);
  }


  storeUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
  }


  getUser() {
    if (localStorage.getItem('user')) {
      this.userInfo = JSON.parse(localStorage.getItem('user') || '')
    }
    return this.userInfo
  }


}
