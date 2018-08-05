import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousPredictionComponent } from './previous-prediction.component';

describe('PreviousPredictionComponent', () => {
  let component: PreviousPredictionComponent;
  let fixture: ComponentFixture<PreviousPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
