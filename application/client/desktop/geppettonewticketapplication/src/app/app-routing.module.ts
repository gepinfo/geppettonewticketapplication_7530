import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'createticket', loadChildren: () => import('./createticket/createticket.module').then(m => m.CreateticketModule), canActivate: [AuthGuard] } , 
{ path : 'getalltickets', loadChildren: () => import('./getalltickets/getalltickets.module').then(m => m.GetallticketsModule), canActivate: [AuthGuard] } , 
{ path : 'updateticket', loadChildren: () => import('./updateticket/updateticket.module').then(m => m.UpdateticketModule), canActivate: [AuthGuard] } , 
{ path : 'searchticket', loadChildren: () => import('./searchticket/searchticket.module').then(m => m.SearchticketModule), canActivate: [AuthGuard] } , 
{ path : 'createseverity', loadChildren: () => import('./createseverity/createseverity.module').then(m => m.CreateseverityModule), canActivate: [AuthGuard] } , 
{ path : 'createservicetype', loadChildren: () => import('./createservicetype/createservicetype.module').then(m => m.CreateservicetypeModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
