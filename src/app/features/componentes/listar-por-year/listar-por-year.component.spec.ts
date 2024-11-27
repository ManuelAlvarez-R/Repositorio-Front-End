import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPorYearComponent } from './listar-por-year.component';

describe('ListarPorYearComponent', () => {
  let component: ListarPorYearComponent;
  let fixture: ComponentFixture<ListarPorYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPorYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPorYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
