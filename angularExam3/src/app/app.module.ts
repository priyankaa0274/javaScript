import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { AddPostService } from  './add-post.service';
import { UserDataService  } from './user-data.service';
import { NavComponent } from './nav/nav.component';
import { CreatepostComponent } from './createpost/createpost.component';

const routes : Routes = [
{path :'login',component:LoginComponent},
{path :'registration',component:RegistrationComponent},
{path :'myaccount',component:CreatepostComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavComponent,
    CreatepostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [UserDataService, AddPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
