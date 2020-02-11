import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSpbComponent } from './detail-spb.component';

describe('DetailSpbComponent', () => {
  let component: DetailSpbComponent;
  let fixture: ComponentFixture<DetailSpbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSpbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSpbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
