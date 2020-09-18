export class RecordUpdateLog {
  private _old_record_id: number;
  private _new_record_id: number;


  constructor() {
  }


  get old_record_id(): number {
    return this._old_record_id;
  }

  set old_record_id(value: number) {
    this._old_record_id = value;
  }

  get new_record_id(): number {
    return this._new_record_id;
  }

  set new_record_id(value: number) {
    this._new_record_id = value;
  }
}
