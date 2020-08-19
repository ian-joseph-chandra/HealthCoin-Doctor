import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {RouterService} from '../../services/router/router.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor(
    public router: RouterService,
    private api: ApiService) {
  }

  ngOnInit(): void {
  }

}
