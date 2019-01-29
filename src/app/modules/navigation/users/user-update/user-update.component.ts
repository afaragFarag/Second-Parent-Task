import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  userEditForm: FormGroup;
  user: any;
  id: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usersServive: UserService,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usersServive.getUserById(this.id).subscribe((result: any) => {
      console.log(result);
      this.user = result.data;
      this.setFormValue();
    });
  }
  // bind user data to be ready to be edited
  setFormValue(): any {
    this.userEditForm.setValue({
      name: this.user.name,
      jobTitle: this.user.jobTitle
    });
  }

  createForm() {
    this.userEditForm = this.formBuilder.group({
      name: ['', Validators.required],
      jobTitle: ['', Validators.required]
    });
  }

  update() {
    if (this.userEditForm.valid) {
      this.usersServive
        .updateUser(this.id, this.userEditForm.value)
        .subscribe((result: any) => {
          this.router.navigate(['users']);
          alert('updated successfully at' + result.updatedAt);
          this.router.navigate(['users']);
        });
    }
  }
}
