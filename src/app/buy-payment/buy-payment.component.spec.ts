import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPaymentComponent } from './buy-payment.component';

describe('BuyPaymentComponent', () => {
  let component: BuyPaymentComponent;
  let fixture: ComponentFixture<BuyPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
