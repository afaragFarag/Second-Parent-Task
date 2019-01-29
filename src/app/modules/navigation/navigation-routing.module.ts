import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RootLayoutComponent } from '../core/layout/root-layout/root-layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UsersComponent },
      { path: 'users', component: UsersComponent },
      { path: '', redirectTo: 'users', pathMatch: 'full' }
    ],
    component: RootLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {}
