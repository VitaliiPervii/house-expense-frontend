import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {User} from '../models/user.model';
import {BaseApi} from '../core/base-api';

@Injectable()

export class UserService extends BaseApi {

  constructor (public http: HttpClient) {
    super (http);
  }

  getUserByEmail(email: string): Observable<User> {
    // const url = `http://house-expense/users?email=${email}`;
    // return this.http.get<User>(url);
    return this.get(`users?email=${email}`);
  }

  // createNewUser(user: User): Observable<User> {
  //   return this.http.post<User>('http://house-expense/users', user);
  // }

  createNewUser(user: User): Observable<User> {
    return this.post('users', user);
  }
}
