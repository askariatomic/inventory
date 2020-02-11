import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTransferComponent } from './detail-transfer.component';

describe('DetailTransferComponent', () => {
  let component: DetailTransferComponent;
  let fixture: ComponentFixture<DetailTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
