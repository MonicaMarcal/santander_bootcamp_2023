import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAtributosComponent } from './comp-atributos.component';

describe('CompAtributosComponent', () => {
  let component: CompAtributosComponent;
  let fixture: ComponentFixture<CompAtributosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompAtributosComponent]
    });
    fixture = TestBed.createComponent(CompAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
