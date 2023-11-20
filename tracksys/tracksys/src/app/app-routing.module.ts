import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginGuard } from './guards/login.guard';
import { AdminComponent } from './components/admin/admin.component';
<<<<<<< HEAD
import { RoleGuard } from './guards/role.guard';
=======
>>>>>>> 91e2fde4beda5ea1099370ba94457a0545d5599d

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
<<<<<<< HEAD
  { path: 'admin', component: AdminComponent, canActivate:[LoginGuard, RoleGuard]}
=======
  { path: 'admin', component: AdminComponent}
>>>>>>> 91e2fde4beda5ea1099370ba94457a0545d5599d
  //{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
