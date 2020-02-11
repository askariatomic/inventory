import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturSupplierComponent } from './retur-supplier.component';

describe('ReturSupplierComponent', () => {
  let component: ReturSupplierComponent;
  let fixture: ComponentFixture<ReturSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
