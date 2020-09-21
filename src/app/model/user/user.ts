import {UserRole} from '../user_role/user-role';
import {EthAccount} from '../eth_account/eth-account';

export class User {
  private _user_id: number;
  private _role_id: UserRole;
  private _eth_id: EthAccount;
  private _first_name: string;
  private _last_name: string;
  private _gender: number;
  private _birth_date: Date;
  private _email: string;
  private _phoneNumber: string;
  private _address: string;
  private _national_id: number;

  constructor() {
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get role_id(): UserRole {
    return this._role_id;
  }

  set role_id(value: UserRole) {
    this._role_id = value;
  }


  get eth_id(): EthAccount {
    return this._eth_id;
  }

  set eth_id(value: EthAccount) {
    this._eth_id = value;
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

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get national_id(): number {
    return this._national_id;
  }

  set national_id(value: number) {
    this._national_id = value;
  }
}
