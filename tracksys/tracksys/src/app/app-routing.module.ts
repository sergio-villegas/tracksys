import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginGuard } from './guards/login.guard';
import { AdminComponent } from './components/admin/admin.component';
import { RoleGuard } from './guards/role.guard';
import { VerComponent } from './components/ver/ver.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { UsuarioEditarComponent } from './components/usuario-editar/usuario-editar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  { path: 'admin', component: AdminComponent, canActivate:[LoginGuard, RoleGuard]},
  { path: 'ver/:id', component: VerComponent, canActivate: [LoginGuard]},
  { path: 'actualizar/:id', component: ActualizarComponent },
  { path: 'usuario-actualizar/:id', component: UsuarioEditarComponent }
  //{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
