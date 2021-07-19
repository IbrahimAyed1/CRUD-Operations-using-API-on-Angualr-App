import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentsComponent } from './students/students.component';
import { NavbarComponent } from './widgets/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersService } from './Services/users.service';
import { UpdateComponent } from './operations/update/update.component';
import { CreateComponent } from './operations/create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ErrorComponent,
    ProfileComponent,
    StudentsComponent,
    NavbarComponent,
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
