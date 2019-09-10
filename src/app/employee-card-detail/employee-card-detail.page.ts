import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-card-detail',
  templateUrl: './employee-card-detail.page.html',
  styleUrls: ['./employee-card-detail.page.scss'],
})
export class EmployeeCardDetailPage implements OnInit {

  employee: any;
  constructor(private route: ActivatedRoute,) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.employee = JSON.parse(paramMap.get('employee'));
    })
  }
}
