import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieAnimationComponent } from './lottie-animation.component';

describe('LottieAnimationComponent', () => {
  let component: LottieAnimationComponent;
  let fixture: ComponentFixture<LottieAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LottieAnimationComponent]
    });
    fixture = TestBed.createComponent(LottieAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
