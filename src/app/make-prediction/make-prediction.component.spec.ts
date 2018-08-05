import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePredictionComponent } from './make-prediction.component';

describe('MakePredictionComponent', () => {
  let component: MakePredictionComponent;
  let fixture: ComponentFixture<MakePredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MakePredictionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
