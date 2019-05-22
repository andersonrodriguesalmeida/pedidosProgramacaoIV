import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { MatTableDataSource } from '@angular/material';
import { Produto } from 'src/app/models/produto';
import { FormGroup } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-pesquisaproduto',
  templateUrl: './pesquisaproduto.component.html',
  styleUrls: ['./pesquisaproduto.component.scss'],
  providers:[ProdutoService ]
})
export class PesquisaProdutoComponent implements OnInit {

  public dataSource:MatTableDataSource<Produto> = new MatTableDataSource();
  public displayedColumns =['select','id', 'nome', 'preco'];
  public form:FormGroup; 
  public selectionModel:SelectionModel<Produto> = new SelectionModel(false);

  constructor(private produtoService:ProdutoService) { }

  ngOnInit() {
    this.pesquisar('');
  }


  public pesquisar(nome:string){
    this.produtoService.pesquisar(nome).subscribe( lista => {
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
