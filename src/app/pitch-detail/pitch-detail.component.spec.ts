import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchDetailComponent } from './pitch-detail.component';

describe('PitchDetailComponent', () => {
  let component: PitchDetailComponent;
  let fixture: ComponentFixture<PitchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
