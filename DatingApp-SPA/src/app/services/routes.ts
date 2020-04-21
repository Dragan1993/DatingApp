import {Routes} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ListsComponent } from '../lists/lists.component';
import { MessagesComponent } from '../messages/messages.component';
import { AuthGuard } from '../_guards/auth.guard';
import { MemberlistComponent } from '../members/memberlist/memberlist.component';
import { MemberDetailComponent } from '../members/memberlist/member-detail/member-detail.component';
import { MemberEditComponent } from '../members/memberlist/member-edit/member-edit.component';
import { MemberListResolver } from '../resolvers/member-list.resolver';
import { MemberDetailResolver } from '../resolvers/member-detail.resolver';
import {MemberEditResolver } from '../resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from '../_guards/prevent-unsaved-changes.guard';
import { ListsResolver } from '../resolvers/list.resolver';

export const appRoutes: Routes =[
      {path: 'home', component: HomeComponent},
      {
            path: '',
            runGuardsAndResolvers: 'always',
            canActivate: [AuthGuard],
            children: [
                  {path: 'lists', component: ListsComponent, resolve : {users: ListsResolver}},
                  {path: 'members', component: MemberlistComponent, resolve: { users: MemberListResolver }},
                  {path: 'members/:id', component: MemberDetailComponent, resolve : {user: MemberDetailResolver}},
                  {path: 'member/edit', component: MemberEditComponent, resolve : {edit : MemberEditResolver},
                  canDeactivate: [PreventUnsavedChanges]},
                  {path: 'messages', component: MessagesComponent}
            ]
      },
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
]