import { NgModule } from '@angular/core';

import { LoginRoutingModule } from '../login/login-routing.module';
import { LoginComponent } from '../login/login.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    SharedModule,
    LoginComponent
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