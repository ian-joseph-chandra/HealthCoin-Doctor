import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-write-record',
  templateUrl: './write-record.component.html',
  styleUrls: ['./write-record.component.css']
})
export class WriteRecordComponent implements OnInit {

  constructor(
    public router: RouterService,
    private api: ApiService) {
  }

  ngOnInit(): void {
  }

}
