import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchSingleComponent } from './pitch-single.component';

describe('PitchSingleComponent', () => {
  let component: PitchSingleComponent;
  let fixture: ComponentFixture<PitchSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
