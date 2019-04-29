import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pedidos';
  public usuario:Usuario;
  constructor(private router:Router){

  }

  public ngOnInit(){
    let user = localStorage.getItem('usuario');
    if (user != null){
      this.usuario = JSON.parse(user);
      this.router.navigate(['/principal']);
    }else {
      this.router.navigate(['login']);
    }
  }
}
