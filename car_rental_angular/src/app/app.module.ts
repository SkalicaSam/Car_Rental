import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';  // Import RouterModule
import { AppComponent } from './app.component';
// import { routes } from './app.routes'; // Import routes
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';  

// ng zoro imports
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form' ;
import { NzButtonModule } from 'ng-zorro-antd/button' ;
import { NzInputModule } from 'ng-zorro-antd/input' ;
import { NzLayoutModule } from 'ng-zorro-antd/layout' ;
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Presmerovanie na login ak je prázdna URL
];


@NgModule({
  declarations: [
    
  ],
  
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes
      ), // Zde se připojí router s definovanými cestami
    NzSpinModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzGridModule,
    AppComponent,
    SignupComponent,
    LoginComponent,
    





  ],
  providers: [],
  
  
  
})
export class AppModule { }