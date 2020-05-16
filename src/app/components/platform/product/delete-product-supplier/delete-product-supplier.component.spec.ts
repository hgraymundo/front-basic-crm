import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductSupplierComponent } from './delete-product-supplier.component';

describe('DeleteProductSupplierComponent', () => {
  let component: DeleteProductSupplierComponent;
  let fixture: ComponentFixture<DeleteProductSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProductSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
