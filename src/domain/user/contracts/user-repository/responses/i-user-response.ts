import {IUser} from "../../../i-user";

export interface IUserResponse {
  get error(): string|null;
  get isSuccess(): boolean;
  get user(): IUser;
}
