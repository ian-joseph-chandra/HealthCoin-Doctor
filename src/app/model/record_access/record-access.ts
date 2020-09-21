import {User} from '../user/user';

export class RecordAccess {
  private _access_id: number;
  private _patient_id: User;
  private _token_access: string;
  private _access_time: Date;
  private _terminate_access: boolean;


  constructor() {
  }

  get access_id(): number {
    return this._access_id;
  }

  set access_id(value: number) {
    this._access_id = value;
  }


  get patient_id(): User {
    return this._patient_id;
  }

  set patient_id(value: User) {
    this._patient_id = value;
  }

  get token_access(): string {
    return this._token_access;
  }

  set token_access(value: string) {
    this._token_access = value;
  }

  get access_time(): Date {
    return this._access_time;
  }

  set access_time(value: Date) {
    this._access_time = value;
  }

  get terminate_access(): boolean {
    return this._terminate_access;
  }

  set terminate_access(value: boolean) {
    this._terminate_access = value;
  }
}
