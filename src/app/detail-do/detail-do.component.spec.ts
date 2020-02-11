import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDoComponent } from './detail-do.component';

describe('DetailDoComponent', () => {
  let component: DetailDoComponent;
  let fixture: ComponentFixture<DetailDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
