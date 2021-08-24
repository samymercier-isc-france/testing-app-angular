import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LotteryServiceService } from '../services/lottery-service.service';

@Component({
  selector: 'app-lottery-info-header',
  templateUrl: './lottery-info-header.component.html',
  styleUrls: ['./lottery-info-header.component.css']
})
export class LotteryInfoHeaderComponent implements OnInit {
  amountOfAurum : number = 0;

  constructor(public lotteryService: LotteryServiceService) { }

  ngOnInit(): void {
    this.lotteryService.getAurums().subscribe(data => {
      this.amountOfAurum = data.aurums;
    })
  }
}
