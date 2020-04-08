import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';
import { UserService } from './services/user.service';
import {NgxGalleryModule} from 'ngx-gallery';

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
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './services/routes';
import { AuthGuard } from './_guards/auth.guard';
import { MemberlistComponent } from './members/memberlist/memberlist.component';
import { MemberCardComponent } from './members/memberlist/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MemberDetailComponent } from './members/memberlist/member-detail/member-detail.component';
import { MemberEditComponent } from './members/memberlist/member-edit/member-edit.component';
import { MemberListResolver } from './resolvers/member-list.resolver';
import { MemberDetailResolver } from './resolvers/member-detail.resolver';
import {MemberEditResolver } from './resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './members/memberlist/photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';

export function tokenGetter() {
   return localStorage.getItem('token');
 }

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MemberlistComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      FileUploadModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),
      TabsModule.forRoot(),
      NgxGalleryModule,

   ],
   providers: [
      AuthService,
      ErrorInterceptorProvide,
      AlertifyService,
      AuthGuard,
      UserService,
      MemberListResolver,
      MemberDetailResolver,
      PreventUnsavedChanges
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
