import {Observable} from "rxjs";
import {IUserCreationHttpResponse} from "./responses/i-user-creation-http-response";

export interface IUserRepository {
  createUserByEmail(email: string): Observable<IUserCreationHttpResponse>;
}
