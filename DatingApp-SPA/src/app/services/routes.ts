import {Routes} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ListsComponent } from '../lists/lists.component';
import { MessagesComponent } from '../messages/messages.component';
import { AuthGuard } from '../_guards/auth.guard';
import { MemberlistComponent } from '../members/memberlist/memberlist.component';
import { MemberDetailComponent } from '../members/memberlist/member-detail/member-detail.component';

export const appRoutes: Routes =[
      {path: 'home', component: HomeComponent},
      {
            path: '',
            runGuardsAndResolvers: 'always',
            canActivate: [AuthGuard],
            children: [
                  {path: 'lists', component: ListsComponent},
                  {path: 'members', component: MemberlistComponent, canActivate: [AuthGuard]},
                  {path: 'members/:id', component: MemberDetailComponent},
                  {path: 'messages', component: MessagesComponent}
            ]
      },
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
]