import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';
import {MatCardModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    LoginRoutingModule,
    MatCardModule,
    MatButtonModule, 
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class FeaturedModule {
}