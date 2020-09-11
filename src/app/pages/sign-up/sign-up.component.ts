import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    public router: RouterService,
    private api: ApiService) {
  }

  ngOnInit(): void {
  }

}
