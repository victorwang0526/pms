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
//开始初始化监控地址
    this.player = new EZUIPlayer({
      id: 'myPlayer',
      url: 'https://hls01open.ys7.com/openlive/dc76cdfbc3ad4d70af9b6714986451a2.m3u8',
      autoplay: true,
      accessToken: "at.afoq68vkd0lopygdbnmbvuem43ej80qp-8s190de6vs-0zyn3sy-ku3rabe6k",
      width: 600,
      height: 400,
    });
//播放
    this.player.play();

  }

}
