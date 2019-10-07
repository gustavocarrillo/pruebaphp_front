import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  backendUrl = 'http://localhost:8000/api/';

  getAll() {
    return this.http.get(this.backendUrl + 'users');
  }

  getUser(id) {
    return this.http.get(this.backendUrl + 'users/' + id);
  }

  setUser(data) {
    return this.http.post(this.backendUrl + 'users', data);
  }
}
