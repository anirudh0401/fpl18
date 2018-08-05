import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionArchiveComponent } from './prediction-archive.component';

describe('PredictionArchiveComponent', () => {
  let component: PredictionArchiveComponent;
  let fixture: ComponentFixture<PredictionArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
