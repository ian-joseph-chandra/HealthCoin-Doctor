export class UserRole {
  private _role_id: number;
  private _role_name: string;


  constructor() {
  }


  get role_id(): number {
    return this._role_id;
  }

  set role_id(value: number) {
    this._role_id = value;
  }

  get role_name(): string {
    return this._role_name;
  }

  set role_name(value: string) {
    this._role_name = value;
  }
}
