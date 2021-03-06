import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAnuncioComponent } from './tipo-anuncio.component';

describe('TipoAnuncioComponent', () => {
  let component: TipoAnuncioComponent;
  let fixture: ComponentFixture<TipoAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
