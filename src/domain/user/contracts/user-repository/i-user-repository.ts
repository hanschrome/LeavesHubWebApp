import {Observable} from "rxjs";
import {IUserCreationHttpResponse} from "./responses/i-user-creation-http-response";
import {IUserLoginHttpResponse} from "./responses/i-user-login-http-response";

export interface IUserRepository {
  createUserByEmail(email: string): Observable<IUserCreationHttpResponse>;

  loginUserByEmailAndPassword(email: string, password: string): Observable<IUserLoginHttpResponse>;
}
