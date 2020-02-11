import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReturStaffComponent } from './detail-retur-staff.component';

describe('DetailReturStaffComponent', () => {
  let component: DetailReturStaffComponent;
  let fixture: ComponentFixture<DetailReturStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReturStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReturStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
