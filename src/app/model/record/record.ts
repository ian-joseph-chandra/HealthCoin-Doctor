import {User} from '../user/user';
import {DoctorWorkPlace} from '../doctor_work_place/doctor-work-place';
import {Hospital} from '../hospital/hospital';

export class Record {
  private _record_id: number;
  private _patient_id: User;
  private _doctor_id: DoctorWorkPlace;
  private _hospital_code: Hospital;
  private _contact_address: string;
  private _record_time: Date;
  private _diagnose_info: string;

  constructor() {
  }

  get record_id(): number {
    return this._record_id;
  }

  set record_id(value: number) {
    this._record_id = value;
  }


  get patient_id(): User {
    return this._patient_id;
  }

  set patient_id(value: User) {
    this._patient_id = value;
  }


  get doctor_id(): DoctorWorkPlace {
    return this._doctor_id;
  }

  set doctor_id(value: DoctorWorkPlace) {
    this._doctor_id = value;
  }

  get hospital_code(): Hospital {
    return this._hospital_code;
  }

  set hospital_code(value: Hospital) {
    this._hospital_code = value;
  }

  get contact_address(): string {
    return this._contact_address;
  }

  set contact_address(value: string) {
    this._contact_address = value;
  }

  get record_time(): Date {
    return this._record_time;
  }

  set record_time(value: Date) {
    this._record_time = value;
  }

  get diagnose_info(): string {
    return this._diagnose_info;
  }

  set diagnose_info(value: string) {
    this._diagnose_info = value;
  }
}
