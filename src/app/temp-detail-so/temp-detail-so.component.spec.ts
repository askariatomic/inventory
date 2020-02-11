import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDetailSoComponent } from './temp-detail-so.component';

describe('TempDetailSoComponent', () => {
  let component: TempDetailSoComponent;
  let fixture: ComponentFixture<TempDetailSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempDetailSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDetailSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
