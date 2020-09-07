import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  records;
  recordNumber = 5;
  constructor(
    public router: RouterService,
    private api: ApiService) {
  }

  ngOnInit(): void {
    this.records = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

}
