import { Component, OnInit } from '@angular/core';

declare var EZUIPlayer: any;

@Component({
  selector: 'app-monitor-detail',
  templateUrl: './monitor-detail.page.html',
  styleUrls: ['./monitor-detail.page.scss'],
})
export class MonitorDetailPage implements OnInit {

  constructor() { }

  player: any;

  ngOnInit() {
    this.player = new EZUIPlayer('myPlayer');
  }

}
