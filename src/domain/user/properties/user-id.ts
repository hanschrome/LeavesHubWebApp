import {IUserId} from "./i-user-id";

export class UserId implements IProperty, IUserId {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
    this.validate();
  }

  get value(): string {
    return this._value;
  }

  validate(): void{
    if (this._value.length != 36) throw new UserIdException('Incorrect length of UUID');
  }
}
