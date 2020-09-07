export class User {
  private _user_id: number;
  private _role_id: number;
  private _first_name: string;
  private _last_name: string;
  private _gender: number;
  private _birth_date: Date;
  private _email: string;
  private _phoneNumber: string;
  private _national_id: number;

  constructor(user_id: number, first_name: string, last_name: string) {
    this._user_id = user_id;
    this._first_name = first_name;
    this._last_name = last_name;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get role_id(): number {
    return this._role_id;
  }

  set role_id(value: number) {
    this._role_id = value;
  }

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }

  set last_name(value: string) {
    this._last_name = value;
  }

  get gender(): number {
    return this._gender;
  }

  set gender(value: number) {
    this._gender = value;
  }

  get birth_date(): Date {
    return this._birth_date;
  }

  set birth_date(value: Date) {
    this._birth_date = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get national_id(): number {
    return this._national_id;
  }

  set national_id(value: number) {
    this._national_id = value;
  }
}
