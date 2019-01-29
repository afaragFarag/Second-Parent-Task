import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { UsersComponent } from './users/users.component';
import { CoreModule } from '../core/core.module';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserDeleteComponent } from './users/user-delete/user-delete.component';

@NgModule({
  declarations: [UsersComponent, UserAddComponent, UserUpdateComponent, UserDeleteComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NavigationModule {}
