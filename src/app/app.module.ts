import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserComponent } from './user/user.component';
import { ObjToArrayPipe } from './obj-to-array.pipe';
import { ProfileService } from '../app/profile-services.service';
import { RegisterComponent } from './register/register.component';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserComponent,
    ObjToArrayPipe,
    RegisterComponent    
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }