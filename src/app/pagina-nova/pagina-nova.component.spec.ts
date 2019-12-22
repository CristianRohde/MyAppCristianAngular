import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNovaComponent } from './pagina-nova.component';

describe('PaginaNovaComponent', () => {
  let component: PaginaNovaComponent;
  let fixture: ComponentFixture<PaginaNovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaNovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
