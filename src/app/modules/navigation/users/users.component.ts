import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['User', 'actions'];
  total = 0;

  users: User[] = [];
  pagingObjs = { pageIndex: 0, pageSize: 0, length: 0 };

  constructor(private _usersService: UserService, private router: Router) {}

  ngOnInit() {
    this.listUsers(++this.pagingObjs.pageIndex);
  }

  listUsers(page: any) {
    this._usersService.getAll(page).subscribe(
      (result: any) => {
        if (!result.data) {
          return null;
        }
        this.users = this.users.concat(result.data);
        this.total = result.total;

        if (page === 1) {
          // // note : api starts from 1 and DT from 0
          // this.pagingObjs.pageIndex = result.page - 1;
          // this.pagingObjs.pageSize = result.per_page;
          // this.pagingObjs.length = result.total;
        }
      },
      (error: any) => {}
    );
  }

  add() {
    // this.router.navigate(['users/add']);
  }

  update(id: any) {
    // this.router.navigate(['users/update', id]);
  }

  // note : delete api returns null !!
  delete(userId: any) {
    this._usersService.deleteUser(userId).subscribe((result: any) => {
      if (result === null) {
        this.users.forEach((user, indx) => {
          if (user.id === userId) {
            this.users.splice(indx, 1);
            this.pagingObjs.length--;
            return;
          }
        });
        alert('deleted successfully!!');
      }
    });
  }

  goToDetails(id: any) {
    //  this.router.navigate(['users/details', id]);
  }

  getNext() {
    this.listUsers(++this.pagingObjs.pageIndex);
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    if (this.total === 0 || this.users.length === this.total) {
      return;
    }
    console.log('hawhaw');
    this.getNext();
  }
}
