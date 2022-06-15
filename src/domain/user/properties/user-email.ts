import {IUserEmail} from "./i-user-email";
import {IProperty} from "../../meta/properties/i-property";

export class UserEmail implements IProperty, IUserEmail {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
    this.validate();
  }

  get value(): string {
    return this._value;
  }

  validate(): void {
    // @todo regex
  }
}
