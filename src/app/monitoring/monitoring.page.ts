import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.page.html',
  styleUrls: ['./monitoring.page.scss'],
})
export class MonitoringPage implements OnInit {

  monitors = [
    {channel: '1', name: '视频1@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: 'https://hls01open.ys7.com/openlive/f2ac3ac4b62a4a2ab24aaff29cb39112.m3u8'},
    {channel: '2', name: '视频2@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: 'https://hls01open.ys7.com/openlive/dc76cdfbc3ad4d70af9b6714986451a2.m3u8'},
    {channel: '3', name: '视频3@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: 'https://hls01open.ys7.com/openlive/cd91b38424a842638683d9218f5e7aca.m3u8'},
    {channel: '4', name: '视频4@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: 'https://hls01open.ys7.com/openlive/859ffb6f794f44259f06dc7117513241.m3u8'},
    // {channel: '5', name: '视频5@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: 'https://hls01open.ys7.com/openlive/859ffb6f794f44259f06dc7117513241.m3u8'},
    // {channel: '6', name: '视频6@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: 'https://hls01open.ys7.com/openlive/859ffb6f794f44259f06dc7117513241.m3u8'},
    // {channel: '7', name: '视频7@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: 'https://hls01open.ys7.com/openlive/859ffb6f794f44259f06dc7117513241.m3u8'},
    // {channel: '8', name: '视频8@DS-7808NB-K2(C30163833)', status: '不在线', liveStatus: '已开通', url: 'https://hls01open.ys7.com/openlive/859ffb6f794f44259f06dc7117513241.m3u8'},
    // {channel: '9', name: '视频9@DS-7808NB-K2(C30163833)', status: '不在线', liveStatus: '未开通', url: 'https://hls01open.ys7.com/openlive/859ffb6f794f44259f06dc7117513241.m3u8'},
    {channel: '10', name: '视频5@DS-7808NB-K2(C30163833)', status: '不在线', liveStatus: '未开通', url: 'https://hls01open.ys7.com/openlive/859ffb6f794f44259f06dc7117513241.m3u8'},
  ];
  constructor(private router: Router,) { }

  ngOnInit() {
  }

  openDetail(m) {
    this.router.navigate(['monitor-detail', {monitor: JSON.stringify(m)}])
  }
}
