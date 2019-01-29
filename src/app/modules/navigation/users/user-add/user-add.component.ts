import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userForm: FormGroup;
  user: any;
  id: any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    // private usersServive: UsersService,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }
  ngOnInit() {}

  createForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      jobTitle: ['', Validators.required]
    });
  }

  addUser() {}
}
