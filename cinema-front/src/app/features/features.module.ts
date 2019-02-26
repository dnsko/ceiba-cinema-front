import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { HomeComponent } from './home/home.component';
import { MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        LoginRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
         LoginComponent,
         HomeComponent
    ],
    providers:[

    ],
    exports:[
        
    ]
})
export class FeaturesModule {}