import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';


@NgModule({
  declarations: [AuthComponent, AuthPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
