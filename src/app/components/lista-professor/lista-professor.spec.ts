import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfessor } from './lista-professor';

describe('ListaProfessor', () => {
  let component: ListaProfessor;
  let fixture: ComponentFixture<ListaProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProfessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProfessor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
