import {Component, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';
import {RecordFactory} from '../../factory/record/record-factory';
import {User} from '../../model/user/user';
import {Record} from '../../model/record/record';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  records;
  record: Record;
  patient: User;
  doctor: User;
  patientId;

  constructor(
    public router: RouterService,
    private api: ApiService,
    private cookieService: CookieService) {
  }

  async ngOnInit(): Promise<void> {
    // tslint:disable-next-line:radix
    await this.checkPatientCookie();
    await this.getPatientRecordList();
  }

  private async getPatientRecordList() {
    const recordListJSON = {
      patient_id: this.patientId
    };

    const response = await this.api.sendPostRequest('record-list', recordListJSON);

    this.records = RecordFactory.recordList(response['record-list']);
    console.log(this.records);
  }

  async checkPatientCookie() {
    if (this.cookieService.get('patient_id') === '') {
      await this.router.goToHomePage();
    } else {
      this.patientId = this.cookieService.get('patient_id');
    }
  }
}
