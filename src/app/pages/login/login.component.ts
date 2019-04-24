import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UsuarioService]
})
export class LoginComponent implements OnInit {

  public form:FormGroup ;
  constructor(private usuarioService:UsuarioService,private router:Router ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email:new FormControl(),
      senha:new FormControl()
    })
  }

  public logar(){
    if (this.form.invalid){
      return;
    }
    let email = this.form.get('email').value;
    let senha = this.form.get('senha').value;
    this.usuarioService.logar(email, senha).subscribe( (usuario)=>{
      if ( usuario != null){
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.router.navigate(['','principal'])
      }else {
        this.form.get('email').setErrors({validacao:'Login ou senha inválido'});
      }
    })
  }

}
