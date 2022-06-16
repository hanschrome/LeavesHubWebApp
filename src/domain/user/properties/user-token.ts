import {IUserToken} from "./i-user-token";
import {IProperty} from "../../meta/properties/i-property";

export class UserToken implements IProperty, IUserToken {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
    this.validate();
  }

  get value(): string {
    return this.value
  }

  validate() {
  }
}
