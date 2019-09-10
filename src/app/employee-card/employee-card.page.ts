import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.page.html',
  styleUrls: ['./employee-card.page.scss'],
})
export class EmployeeCardPage implements OnInit {

  constructor() { }

  employees: Array<any> = [
    {name: '闫磊', avatar: 'yanlei.png', birthDay: '1992年5月7日', post: '劳务负责人', idNo: '640321199205071530', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日'},
    {name: '邵新平', avatar: 'shaoxinping.png', birthDay: '1982年11月3日', post: '劳务负责人', idNo: '640321198211030714', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日'},
    {name: '冯宏祥', avatar: 'fenghongxiang.png', birthDay: '1968年3月10日', post: '劳务负责人', idNo: '642123196803100514', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日'},
    {name: '孙兵', avatar: 'sunbing.png', birthDay: '1991年7月10日', post: '劳务负责人', idNo: '640321199107101732', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日'},
    {name: '殷艳君', avatar: 'yinyanjun.png', birthDay: '1992年8月14日', post: '劳务负责人', idNo: '640321199208141717', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日'},
    {name: '陈富保', avatar: 'chenfubao.png', birthDay: '1992年1月29日', post: '劳务负责人', idNo: '640321199201290314', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日'},
    {name: '邵银华', avatar: 'shaoyinhua.png', birthDay: '1971年6月5日', post: '劳务负责人', idNo: '642123197206050712', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日'},
    {name: '解建良', avatar: 'xiejianliang.png', birthDay: '1990年4月19日', post: '劳务负责人', idNo: '642224199004191216', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日'},
    {name: '吴建国', avatar: 'wujianguo.png', birthDay: '1978年11月23日', post: '劳务负责人', idNo: '642123197811232112', registeDate: '2019年2月', expired: '一年', issueDate: '2019年2月15日'},
  ];

  ngOnInit() {
  }

}
