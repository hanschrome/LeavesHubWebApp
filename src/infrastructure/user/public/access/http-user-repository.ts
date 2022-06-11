import {IUserRepository} from '../../../../domain/user/contracts/user-repository/i-user-repository';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {
  IUserCreationHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-creation-http-response";
import {UserCreationHttpResponse} from "./user-creation-http-response";
import {environment} from "../../../../environments/environment";
import {Injectable} from "@angular/core";
import {
  IUserLoginHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-login-http-response";
import {UserLoginHttpResponse} from "./UserLoginHttpResponse";

@Injectable()
export class HttpUserRepository implements IUserRepository {

  private _registerUserUrl = '/v1/register';
  private _loginUserUrl = '/v1/login';

  constructor(private http: HttpClient) {}

  get registerUserUrl(): string {
    return this._registerUserUrl
  }

  get loginUserUrl(): string {
    return this._loginUserUrl;
  }

  createUserByEmail(email: string): Observable<IUserCreationHttpResponse> {
     return this.http.post(environment.api + this.registerUserUrl, {email: email}).pipe(
      map((rawHttpResponse: any) => {
        return new UserCreationHttpResponse(rawHttpResponse.error, rawHttpResponse.isSuccess);
      })
    );
  }

  loginUserByEmailAndPassword(email: string, password: string): Observable<IUserLoginHttpResponse> {
    return this.http.post(environment.api + this.loginUserUrl, {email: email, password: password}).pipe(
      map((rawHttpResponse: any) => {
        return new UserLoginHttpResponse(
          rawHttpResponse.error,
          rawHttpResponse.isSuccess,
          rawHttpResponse.expiresInSeconds,
          rawHttpResponse.jwt
        );
      })
    );
  }
}
