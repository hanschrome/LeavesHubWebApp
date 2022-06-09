import {Observable} from "rxjs";

export interface IUserRepository {
  createUserByEmail(email: string): Observable<IUserCreationHttpResponse>;
}
