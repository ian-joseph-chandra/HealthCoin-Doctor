import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-read-record',
  templateUrl: './read-record.component.html',
  styleUrls: ['./read-record.component.css']
})
export class ReadRecordComponent implements OnInit {

  constructor(
    public router: RouterService,
    private api: ApiService) {
  }

  ngOnInit(): void {
  }

}
