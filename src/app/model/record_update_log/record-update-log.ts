import {Record} from '../record/record';

export class RecordUpdateLog {
  private _old_record_id: Record;
  private _new_record_id: number;


  constructor() {
  }


  get old_record_id(): Record {
    return this._old_record_id;
  }

  set old_record_id(value: Record) {
    this._old_record_id = value;
  }

  get new_record_id(): number {
    return this._new_record_id;
  }

  set new_record_id(value: number) {
    this._new_record_id = value;
  }
}
