import {User} from '../user/user';
import {Hospital} from '../hospital/hospital';

export class Record {
  private _record_id: number;
  private _patient_id: User;
  private _doctor_id: User;
  private _hospital_code: Hospital;
  private _contract_address: string;
  private _record_time: Date;
  private _disease_name: string;
  private _diagnostic_detail: string;

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


  get disease_name(): string {
    return this._disease_name;
  }

  set disease_name(value: string) {
    this._disease_name = value;
  }

  get doctor_id(): User {
    return this._doctor_id;
  }

  set doctor_id(value: User) {
    this._doctor_id = value;
  }

  get hospital_code(): Hospital {
    return this._hospital_code;
  }

  set hospital_code(value: Hospital) {
    this._hospital_code = value;
  }

  get contract_address(): string {
    return this._contract_address;
  }

  set contract_address(value: string) {
    this._contract_address = value;
  }

  get record_time(): Date {
    return this._record_time;
  }

  set record_time(value: Date) {
    this._record_time = value;
  }

  get diagnostic_detail(): string {
    return this._diagnostic_detail;
  }

  set diagnostic_detail(value: string) {
    this._diagnostic_detail = value;
  }
}
