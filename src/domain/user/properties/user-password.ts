import {IProperty} from "../../meta/properties/i-property";
import {IUserPassword} from "./i-user-password";

export class UserPassword implements IProperty, IUserPassword{

  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
    this.validate();
  }

  validate(): void {
  }

  get value(): string {
    return this._value;
  }

}
