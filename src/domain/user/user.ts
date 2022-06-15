import {IUser} from "./i-user";
import {IUserId} from "./properties/i-user-id";
import {IUserEmail} from "./properties/i-user-email";

export class User implements IUser {
  private readonly _id: IUserId;
  private readonly _email: IUserEmail|null;

  constructor(id: IUserId, email: IUserEmail|null) {
    this._id = id;
    this._email = email;
  }

  get id(): IUserId {
    return this._id;
  }

  get email(): IUserEmail|null {
    return this._email;
  }
}
