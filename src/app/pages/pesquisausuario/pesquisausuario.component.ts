import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pesquisausuario',
  templateUrl: './pesquisausuario.component.html',
  styleUrls: ['./pesquisausuario.component.scss'],
  providers:[ UsuarioService ]
})
export class PesquisausuarioComponent implements OnInit {

  public displayedColumns =['id', 'nome', 'email'];
  public form:FormGroup;
  public dataSource:MatTableDataSource<Usuario> = new MatTableDataSource([]);
  constructor(private usuarioService:UsuarioService) { 

  }

  ngOnInit() {
  }

  public pesquisar(value){
    // this.usuarioService.
  }


}
