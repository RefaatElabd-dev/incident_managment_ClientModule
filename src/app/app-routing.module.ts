import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IncidentComponent } from './incident/incident.component';
import { StartComponent } from './incident/start/start.component';
import { LoginComponent } from './login/login.component';
import { AuthGurd } from './Shared/Services/auth-gurd.service';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/incidents', pathMatch: 'full' },
  { path: 'incidents', component:  IncidentComponent, children: [
      { path: '', component: StartComponent },
    ]
  },
  { path: 'Admin', canActivate: [AuthGurd], component: AdminComponent },
  { path: 'User', canActivate: [AuthGurd], component: UserComponent },
  { path: 'Login', component: LoginComponent },
  { path: '**', redirectTo: '/incidents' },
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
