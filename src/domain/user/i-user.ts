import {IUserId} from "./properties/i-user-id";

export interface IUser {
  get id(): IUserId|null;
}
