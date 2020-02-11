import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSoComponent } from './detail-so.component';

describe('DetailSoComponent', () => {
  let component: DetailSoComponent;
  let fixture: ComponentFixture<DetailSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
