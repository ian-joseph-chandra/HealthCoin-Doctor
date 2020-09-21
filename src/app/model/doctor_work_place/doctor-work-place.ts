import {Hospital} from '../hospital/hospital';

export class DoctorWorkPlace {
  private _doctor_id: number;
  private _hospital_code: Hospital;


  constructor() {
  }


  get doctor_id(): number {
    return this._doctor_id;
  }

  set doctor_id(value: number) {
    this._doctor_id = value;
  }


  get hospital_code(): Hospital {
    return this._hospital_code;
  }

  set hospital_code(value: Hospital) {
    this._hospital_code = value;
  }
}

