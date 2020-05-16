import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductSupplierComponent } from './new-product-supplier.component';

describe('NewProductSupplierComponent', () => {
  let component: NewProductSupplierComponent;
  let fixture: ComponentFixture<NewProductSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
