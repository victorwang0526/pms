import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

declare var EZUIPlayer: any;

@Component({
  selector: 'app-monitor-detail',
  templateUrl: './monitor-detail.page.html',
  styleUrls: ['./monitor-detail.page.scss'],
})
export class MonitorDetailPage implements OnInit {

  constructor(private route: ActivatedRoute,) {
    this.route.paramMap.subscribe(paramMap => {
      this.monitor = JSON.parse(paramMap.get('monitor'));
      console.log('....')

      //开始初始化监控地址
      this.player = new EZUIPlayer({
        id: 'myPlayer',
        url: this.monitor.url,
        autoplay: true,
        accessToken: "at.afoq68vkd0lopygdbnmbvuem43ej80qp-8s190de6vs-0zyn3sy-ku3rabe6k",
        width: 600,
        height: 400,
      });
      this.player.src = this.monitor.url;
      //播放
      this.player.play();

    });
  }

  player: any;
  monitor: any;

  ngOnInit() {



  }

}
