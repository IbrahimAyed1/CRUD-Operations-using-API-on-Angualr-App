import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { CreateComponent } from './operations/create/create.component';
import { UpdateComponent } from './operations/update/update.component';

const routes: Routes = [
  {path: '', component:StudentsComponent},
  {path:'about', component:AboutComponent},
  {path: 'students/:id', component:ProfileComponent},
  {path:'register', component:CreateComponent},
  {path:'update/:id', component:UpdateComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
