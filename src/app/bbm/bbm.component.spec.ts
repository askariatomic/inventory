import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbmComponent } from './bbm.component';

describe('BbmComponent', () => {
  let component: BbmComponent;
  let fixture: ComponentFixture<BbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
