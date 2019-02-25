import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {
}