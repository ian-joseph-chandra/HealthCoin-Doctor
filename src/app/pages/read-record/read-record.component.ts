import {Component, Input, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';
import {Record} from '../../model/record/record';
import {RecordFactory} from '../../factory/record/record-factory';
import {RecordListComponent} from '../record-list/record-list.component';

@Component({
  selector: 'app-read-record',
  templateUrl: './read-record.component.html',
  styleUrls: ['./read-record.component.css']
})
export class ReadRecordComponent implements OnInit {

  record: Record;
  // record2: Record;
  // record2Copy: Record;
  constructor(
    public router: RouterService,
    private api: ApiService) {
  }

  async ngOnInit(): Promise<void> {
    this.record = Object.assign(new Record(), history.state.data);

    await this.getDiagnosticDetail(this.record);
  }


  private async getDiagnosticDetail(record: Record) {
    const readRecordJSON = {
      record_id: record.record_id
    };
    const readRecordResponse = await this.api.sendPostRequest('read-record', readRecordJSON);

    this.record = RecordFactory.readRecord(this.record, readRecordResponse.data.diagnostic_detail);
    console.log(this.record);
    console.log(this.record.doctor_id.first_name);
  }
}
