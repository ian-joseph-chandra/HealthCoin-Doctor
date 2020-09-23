import {EthAccount} from '../eth_account/eth-account';

export class Hospital {
  private _hospital_code: string;
  private _eth_id: EthAccount;
  private _hospital_name: string;
  private _hospital_address: string;
  private _email: string;
  private _phone_number: string;

  constructor() {
  }


  get hospital_code(): string {
    return this._hospital_code;
  }

  set hospital_code(value: string) {
    this._hospital_code = value;
  }

  get eth_id(): EthAccount {
    return this._eth_id;
  }

  set eth_id(value: EthAccount) {
    this._eth_id = value;
  }

  get hospital_name(): string {
    return this._hospital_name;
  }

  set hospital_name(value: string) {
    this._hospital_name = value;
  }

  get hospital_address(): string {
    return this._hospital_address;
  }

  set hospital_address(value: string) {
    this._hospital_address = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phone_number(): string {
    return this._phone_number;
  }

  set phone_number(value: string) {
    this._phone_number = value;
  }
}
