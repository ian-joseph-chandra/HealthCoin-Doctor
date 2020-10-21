import {Component, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';
import {RecordFactory} from '../../factory/record/record-factory';
import {User} from '../../model/user/user';
import {Record} from '../../model/record/record';
import {CookieService} from 'ngx-cookie-service';
import {SessionService} from '../../services/session/session.service';

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
  doctorId;
  patientId;

  constructor(
    public router: RouterService,
    private api: ApiService,
    private cookie: CookieService,
    private session: SessionService) {
  }

  async ngOnInit(): Promise<void> {
    this.doctorId = await this.session.checkSession();

    await this.checkPatientCookie();
    await this.getPatientRecordList();
  }

  private async getPatientRecordList() {
    const recordListJSON = {
      patient_id: this.patientId
    };

    const response = await this.api.sendPostRequest('record-list', recordListJSON);

    this.records = RecordFactory.recordList(this.patientId, response['record-list']);
    console.log(this.records);
  }

  async checkPatientCookie() {
    if (this.cookie.get('patient_id') === '') {
      await this.router.goToHomePage();
    } else {
      this.patientId = this.cookie.get('patient_id');
    }
  }
}
