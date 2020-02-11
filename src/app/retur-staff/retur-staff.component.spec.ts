import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturStaffComponent } from './retur-staff.component';

describe('ReturStaffComponent', () => {
  let component: ReturStaffComponent;
  let fixture: ComponentFixture<ReturStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
