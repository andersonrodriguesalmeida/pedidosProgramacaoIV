import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { AbstractService } from './abstract.service';

@Injectable()
export class UsuarioService extends AbstractService<Usuario> {


    constructor(protected http:HttpClient){
        super(http);
    }

    getWebService(){
        return 'usuario';
    }

    public logar(email:string,senha:string):Observable<Usuario> {
        let link = this.url +"/usuario/logar";
        let user = {
            email:email,
            senha:senha
        }
        return this.http.post<Usuario>(link, user);
    }
}