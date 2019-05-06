import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisausuarioComponent } from './pesquisausuario.component';

describe('PesquisausuarioComponent', () => {
  let component: PesquisausuarioComponent;
  let fixture: ComponentFixture<PesquisausuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisausuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
