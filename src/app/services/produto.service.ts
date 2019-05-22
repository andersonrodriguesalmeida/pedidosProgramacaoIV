import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { AbstractService } from './abstract.service';
import { Produto } from '../models/produto';

@Injectable()
export class ProdutoService extends AbstractService<Produto> {


    constructor(protected http:HttpClient){
        super(http);
    }

    getWebService(){
        return 'produto';
    }

    public pesquisar(nome:string):Observable<Array<Produto>> {
        const url = this.urlService + '/buscarpornome';
        return this.http.post<Array<Produto>>(url, nome);

    }
}