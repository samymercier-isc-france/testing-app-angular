import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotterySpinningWheelComponent } from './lottery-spinning-wheel.component';

describe('LotterySpinningWheelComponent', () => {
  let component: LotterySpinningWheelComponent;
  let fixture: ComponentFixture<LotterySpinningWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotterySpinningWheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotterySpinningWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
