import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaProdutoComponent } from './pesquisaproduto.component';

describe('PesquisaprodutoComponent', () => {
  let component: PesquisaProdutoComponent;
  let fixture: ComponentFixture<PesquisaProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
