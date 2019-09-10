import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.page.html',
  styleUrls: ['./monitoring.page.scss'],
})
export class MonitoringPage implements OnInit {

  monitors = [
    {channel: '1', name: '视频1@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: ''},
    {channel: '2', name: '视频2@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: ''},
    {channel: '3', name: '视频3@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: ''},
    {channel: '4', name: '视频4@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: ''},
    {channel: '5', name: '视频5@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: ''},
    {channel: '6', name: '视频6@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: ''},
    {channel: '7', name: '视频7@DS-7808NB-K2(C30163833)', status: '在线', liveStatus: '已开通', url: ''},
    {channel: '8', name: '视频8@DS-7808NB-K2(C30163833)', status: '不在线', liveStatus: '已开通', url: ''},
    {channel: '9', name: '视频9@DS-7808NB-K2(C30163833)', status: '不在线', liveStatus: '未开通', url: ''},
    {channel: '10', name: '视频10@DS-7808NB-K2(C30163833)', status: '不在线', liveStatus: '未开通', url: ''},
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  openDetail(m) {
    this.navCtrl.navigateForward('monitor-detail', {})
  }
}
