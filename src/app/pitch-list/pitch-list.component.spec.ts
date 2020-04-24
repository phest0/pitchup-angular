import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchListComponent } from './pitch-list.component';

describe('PitchListComponent', () => {
  let component: PitchListComponent;
  let fixture: ComponentFixture<PitchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
