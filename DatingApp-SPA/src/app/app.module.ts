import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvide } from './services/error.interceptor';
import { AlertifyService } from './services/alertify.service';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './services/routes';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MemberListComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),

   ],
   providers: [
      AuthService,
      ErrorInterceptorProvide,
      AlertifyService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
