import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBbmComponent } from './detail-bbm.component';

describe('DetailBbmComponent', () => {
  let component: DetailBbmComponent;
  let fixture: ComponentFixture<DetailBbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
