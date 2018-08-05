import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualScoresComponent } from './actual-scores.component';

describe('ActualScoresComponent', () => {
  let component: ActualScoresComponent;
  let fixture: ComponentFixture<ActualScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
