import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CadUsuarioComponent } from './pages/cadusuario/cadusuario.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'principal', component:PrincipalComponent,
    children:[
      {
        path:'cad-usuario',
        component:CadUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
