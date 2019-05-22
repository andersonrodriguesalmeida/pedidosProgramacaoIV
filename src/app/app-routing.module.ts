import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CadUsuarioComponent } from './pages/cadusuario/cadusuario.component';
import { PesquisaUsuarioComponent } from './pages/pesquisausuario/pesquisausuario.component';
import { PesquisaProdutoComponent } from './pages/pesquisaproduto/pesquisaproduto.component';
import { CadProdutoComponent } from './pages/cadproduto/cadproduto.component';

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
      },
      {
        path:'pesquisa-usuario',
        component:PesquisaUsuarioComponent
      },
      {
        path:'pesquisa-produto',
        component:PesquisaProdutoComponent
      },
      {
        path:'cadastro-produto',
        component:CadProdutoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
