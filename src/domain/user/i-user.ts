import {IUserId} from "./properties/i-user-id";
import {IUserEmail} from "./properties/i-user-email";
import {IUserPassword} from "./properties/i-user-password";

export interface IUser {
  get id(): IUserId|null;

  get email(): IUserEmail|null;

  get password(): IUserPassword|null;
}
