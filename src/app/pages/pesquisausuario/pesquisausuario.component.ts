import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-pesquisausuario',
  templateUrl: './pesquisausuario.component.html',
  styleUrls: ['./pesquisausuario.component.scss'],
  providers:[ UsuarioService ]
})
export class PesquisaUsuarioComponent implements OnInit {

  public displayedColumns =['select','id', 'nome', 'email'];
  public form:FormGroup;
  public dataSource:MatTableDataSource<Usuario> = new MatTableDataSource([]);
  public selectionModel:SelectionModel<Usuario> = new SelectionModel(false);

  constructor(private usuarioService:UsuarioService) { 

  }

  ngOnInit() {
    this.pesquisar('');
  }

  public pesquisar(value){
    this.usuarioService.pesquisar(value).subscribe( (lista)=> {
      this.dataSource = new MatTableDataSource(lista);
    });
  }

  isAllSelected() {
    const numSelected = this.selectionModel.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selectionModel.clear() :
        this.dataSource.data.forEach(row => this.selectionModel.select(row));
  }


}
