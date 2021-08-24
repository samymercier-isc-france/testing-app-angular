import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryInfoHeaderComponent } from './lottery-info-header.component';

describe('LotteryInfoHeaderComponent', () => {
  let component: LotteryInfoHeaderComponent;
  let fixture: ComponentFixture<LotteryInfoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotteryInfoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryInfoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
