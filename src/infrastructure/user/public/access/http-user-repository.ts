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
import {UserLoginHttpResponse} from "./user-login-http-response";
import {
  IUserEmailVerifyHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-email-verify-http-response";
import {UserEmailVerifyHttpResponse} from "./user-email-verify-http-response";
import {
  IUserRecoverPasswordRequestHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-recover-password-request-http-response";
import {
  IUserResetPasswordHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-reset-password-http-response";
import {UserRecoverPasswordByEmailHttpResponse} from "./user-recover-password-by-email-http-response";
import {UserResetPasswordHttpResponse} from "./user-reset-password-http-response";

@Injectable()
export class HttpUserRepository implements IUserRepository {

  private _registerUserUrl = '/v1/user-access/register';
  private _loginUserUrl = '/v1/user-access/login';
  private _verifyUserMailUrl = '/v1/user-access/verify-mail';
  private _recoverUserPasswordByMailUrl = '/v1/user-access/recover-password';
  private _resetUserPasswordByTokenUrl = '/v1/user-access/reset-password';

  constructor(private http: HttpClient) {}

  get registerUserUrl(): string {
    return this._registerUserUrl
  }

  get loginUserUrl(): string {
    return this._loginUserUrl;
  }

  get verifyUserMailUrl(): string {
    return this._verifyUserMailUrl;
  }

  get recoverUserPasswordByMailUrl(): string {
    return this._recoverUserPasswordByMailUrl;
  }

  get resetUserPasswordByTokenUrl(): string {
    return this._resetUserPasswordByTokenUrl;
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

  verifyUserByEmail(email: string, token: string): Observable<IUserEmailVerifyHttpResponse> {
    return this.http.post(environment.api + this.verifyUserMailUrl, {email: email, token: token}).pipe(
      map((rawHttpResponse: any) => {
        return new UserEmailVerifyHttpResponse(rawHttpResponse.error, rawHttpResponse.isSuccess);
      })
    );
  }

  recoverUserPasswordByEmail(email: string): Observable<IUserRecoverPasswordRequestHttpResponse> {
    return this.http.post(environment.api + this.recoverUserPasswordByMailUrl, {email: email}).pipe(
      map((rawHttpResponse: any) => {
        return new UserRecoverPasswordByEmailHttpResponse(rawHttpResponse.error, rawHttpResponse.isSuccess);
      })
    );
  }

  resetUserPasswordByToken(token: string): Observable<IUserResetPasswordHttpResponse> {
    return this.http.post(environment.api + this.resetUserPasswordByTokenUrl, {token: token}).pipe(
      map((rawHttpResponse: any) => {
        return new UserResetPasswordHttpResponse(rawHttpResponse.error, rawHttpResponse.isSuccess);
      })
    );
  }
}
