import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cadusuario',
  templateUrl: './cadusuario.component.html',
  styleUrls: ['./cadusuario.component.scss'],
  providers:[ UsuarioService]
})
export class CadUsuarioComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }



}
