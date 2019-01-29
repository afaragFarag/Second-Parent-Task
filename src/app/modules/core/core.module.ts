import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { RootLayoutComponent } from './layout/root-layout/root-layout.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    HeaderComponent,
    RootLayoutComponent,
    PageNotFoundComponent
  ],
  imports: [CommonModule, CoreRoutingModule]
})
export class CoreModule {}
