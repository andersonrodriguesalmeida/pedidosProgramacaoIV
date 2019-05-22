import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadproduto',
  templateUrl: './cadproduto.component.html',
  styleUrls: ['./cadproduto.component.scss'],
  providers:[ProdutoService ]
})
export class CadProdutoComponent implements OnInit {

  public form:FormGroup;
  public produto:Produto;

  constructor(private produtoService:ProdutoService, private router:Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      nome:new FormControl(),
      preco:new FormControl()
    })
  }

  public salvar(){
    if (this.form.invalid){
      alert('Existem campos inválidos!');
      return;
    }
    if (this.produto == null){
      this.produto = new Produto();
    }

    this.produto.nome = this.form.get('nome').value;
    this.produto.preco = this.form.get('preco').value;
    this.produtoService.salvar(this.produto).subscribe( prod => {
      this.router.navigate(['/principal/pesquisa-produto']);
    });
  }

}
