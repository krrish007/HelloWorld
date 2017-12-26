import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ProfileComponent } from './../profile/profile.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
 // { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
