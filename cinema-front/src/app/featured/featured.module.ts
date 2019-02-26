import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';

@NgModule({
imports: [LoginRoutingModule],
declarations: [LoginComponent],
providers:[],
exports:[]
})
export class FeaturesModule {}