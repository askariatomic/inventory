import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReturSupplierComponent } from './detail-retur-supplier.component';

describe('DetailReturSupplierComponent', () => {
  let component: DetailReturSupplierComponent;
  let fixture: ComponentFixture<DetailReturSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReturSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReturSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
