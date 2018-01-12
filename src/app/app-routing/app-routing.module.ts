import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './../profile/profile.component';
import { UserComponent } from '../user/user.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  // { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
