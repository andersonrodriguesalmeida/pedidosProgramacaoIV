import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cadusuario',
  templateUrl: './cadusuario.component.html',
  styleUrls: ['./cadusuario.component.scss'],
  providers:[ UsuarioService]
})
export class CadUsuarioComponent implements OnInit {

  public form:FormGroup;
  public usuario:Usuario;

  constructor(private usuarioService:UsuarioService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = new FormGroup({
      nome:new FormControl(),
      email: new FormControl(),
      senha:new FormControl()
    });

  } 

  public salvar(){
    if (this.form.invalid){
      return;
    }
    this.usuario = new Usuario();
    this.usuario.nome = this.form.get('nome').value;
    this.usuario.email = this.form.get('email').value;
    this.usuario.senha = this.form.get('senha').value;
    this.usuarioService.salvar(this.usuario).subscribe( (user)=>{
      this.usuario = user;
      this.snackBar.open('Salvo com sucesso!','', {
        duration: 3000,
      });
    })

  }


}
