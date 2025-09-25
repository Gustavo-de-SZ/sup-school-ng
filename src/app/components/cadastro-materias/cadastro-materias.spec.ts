import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMaterias } from './cadastro-materias';

describe('CadastroMaterias', () => {
  let component: CadastroMaterias;
  let fixture: ComponentFixture<CadastroMaterias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroMaterias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroMaterias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
