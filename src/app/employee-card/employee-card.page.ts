import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";
import {BarcodeScanner, BarcodeScanResult} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.page.html',
  styleUrls: ['./employee-card.page.scss'],
})
export class EmployeeCardPage implements OnInit {

  constructor(private router: Router,
              private barcodeScanner: BarcodeScanner,
              private alertCtrl: AlertController) {
    console.log('Employee Card Page Constructor');
  }

  employees: Array<any> = [
    {id: 1, name: '闫磊', avatar: 'yanlei.png', certification: '生产配电工程施工资格', birthDay: '1992年5月7日', post: '劳务负责人', idNo: '640321199205071530', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日', issuePost: ''},
    {id: 2, name: '邵新平', avatar: 'shaoxinping.png', certification: '生产配电工程施工资格', birthDay: '1982年11月3日', post: '劳务负责人', idNo: '640321198211030714', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日', issuePost: ''},
    {id: 3, name: '冯宏祥', avatar: 'fenghongxiang.png', certification: '生产配电工程施工资格', birthDay: '1968年3月10日', post: '劳务负责人', idNo: '642123196803100514', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日', issuePost: ''},
    {id: 4, name: '孙兵', avatar: 'sunbing.png', certification: '生产配电工程施工资格', birthDay: '1991年7月10日', post: '劳务负责人', idNo: '640321199107101732', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日', issuePost: ''},
    {id: 5, name: '殷艳君', avatar: 'yinyanjun.png', certification: '生产配电工程施工资格', birthDay: '1992年8月14日', post: '劳务负责人', idNo: '640321199208141717', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日', issuePost: ''},
    {id: 6, name: '陈富保', avatar: 'chenfubao.png', certification: '生产配电工程施工资格', birthDay: '1992年1月29日', post: '劳务负责人', idNo: '640321199201290314', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日', issuePost: ''},
    {id: 7, name: '邵银华', avatar: 'shaoyinhua.png', certification: '生产配电工程施工资格', birthDay: '1971年6月5日', post: '劳务负责人', idNo: '642123197206050712', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日', issuePost: ''},
    {id: 8, name: '解建良', avatar: 'xiejianliang.png', certification: '生产配电工程施工资格', birthDay: '1990年4月19日', post: '劳务负责人', idNo: '642224199004191216', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日', issuePost: ''},
    {id: 9, name: '吴建国', avatar: 'wujianguo.png', certification: '生产配电工程施工资格', birthDay: '1978年11月23日', post: '劳务负责人', idNo: '642123197811232112', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日', issuePost: ''},
  ];

  ngOnInit() {
  }

  openDetail(employee) {
    this.router.navigate(['employee-card-detail', {employee: JSON.stringify(employee)}] );
  }

  openQr() {
    this.barcodeScanner.scan().then((result: BarcodeScanResult) => {
      if(result.cancelled == false) {
        let eid = result.text;
        let employee = null;
        for(let e of this.employees) {
          if(e.id == eid) {
            employee = e;
            break;
          }
        }
        this.openDetail(employee);
      }
    }).catch(err => {
      this.alertMsg('error: ' + err);
      console.log('Error', err);
    });
  }

  alertMsg(msg) {
    this.alertCtrl.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK']
    }).then(alert => {
      alert.present()
    });
  }
}
