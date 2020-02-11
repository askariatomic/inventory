import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDetailSpbComponent } from './temp-detail-spb.component';

describe('TempDetailSpbComponent', () => {
  let component: TempDetailSpbComponent;
  let fixture: ComponentFixture<TempDetailSpbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempDetailSpbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDetailSpbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
