import { Injectable } from '@angular/core';
import { UsersUrls } from 'src/app/configs/api-urls.config';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(page: any) {
    return this.http.get(UsersUrls.listUsers, { params: { page: page } });
  }

  getUserById(id: any) {
    return this.http.get(UsersUrls.singleUser + id);
  }

  addUser(user: User) {
    return this.http.post(UsersUrls.createUser, { params: user });
  }

  updateUser(id: any, changes: any) {
    return this.http.put(UsersUrls.updateUser + id, { params: changes });
  }

  deleteUser(userId: any) {
    return this.http.delete(UsersUrls.deleteUser + '/' + userId);
  }
}
