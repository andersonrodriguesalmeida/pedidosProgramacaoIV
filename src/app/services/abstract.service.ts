import { AbstractModel } from '../models/abstractmodel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export abstract class AbstractService <T extends AbstractModel>{

    public url:string = 'http://localhost:8080/Pedidos/rest';
    public urlService = this.url + '/'+this.getWebService();

    constructor(protected http:HttpClient){
    }
    public abstract getWebService():string;
    
    public salvar(obj:T):Observable<any>{
        let url = this.urlService + '/salvar';    
        return this.http.post<T>(url, obj);
    }

    public buscarPorCodigo(id:number):Observable<any> {
        let url = this.urlService+'/'+ id;
        return this.http.get<T>(url);
    }

    public deletar(id:number):Observable<any> {
        let url = this.urlService+'/'+id;
        return this.http.delete(url);
    }

}