import {IUser} from "./i-user";
import {IUserId} from "./properties/i-user-id";
import {IUserEmail} from "./properties/i-user-email";
import {IUserPassword} from "./properties/i-user-password";

export class User implements IUser {
  private readonly _id: IUserId;
  private readonly _email: IUserEmail|null;
  private readonly _password: IUserPassword|null;

  constructor(
    id: IUserId,
    email: IUserEmail|null = null,
    password: IUserPassword|null = null,
  ) {
    this._id = id;
    this._email = email;
    this._password = password;
  }

  get id(): IUserId {
    return this._id;
  }

  get email(): IUserEmail|null {
    return this._email;
  }

  get password(): IUserPassword|null {
    return this._password;
  }
}
