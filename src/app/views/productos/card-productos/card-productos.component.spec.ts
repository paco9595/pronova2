import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductosComponent } from './card-productos.component';

describe('CardProductosComponent', () => {
  let component: CardProductosComponent;
  let fixture: ComponentFixture<CardProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
