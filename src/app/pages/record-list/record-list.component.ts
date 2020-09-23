import {Component, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';
import {RecordFactory} from '../../factory/record/record-factory';
import {User} from '../../model/user/user';
import {Record} from '../../model/record/record';

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
  patientId = 1;

  constructor(
    public router: RouterService,
    private api: ApiService) {
  }

  async ngOnInit(): Promise<void> {
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
}
