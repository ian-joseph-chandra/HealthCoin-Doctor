export class EthAccount {
  private _eth_id: number;
  private _eth_address: string;
  private _eth_balance: number;


  constructor() {
  }


  get eth_id(): number {
    return this._eth_id;
  }

  set eth_id(value: number) {
    this._eth_id = value;
  }

  get eth_address(): string {
    return this._eth_address;
  }

  set eth_address(value: string) {
    this._eth_address = value;
  }

  get eth_balance(): number {
    return this._eth_balance;
  }

  set eth_balance(value: number) {
    this._eth_balance = value;
  }
}
