import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDetailTransferComponent } from './temp-detail-transfer.component';

describe('TempDetailTransferComponent', () => {
  let component: TempDetailTransferComponent;
  let fixture: ComponentFixture<TempDetailTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempDetailTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDetailTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
