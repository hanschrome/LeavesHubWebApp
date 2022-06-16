import {IUserRepository} from '../../../../domain/user/contracts/user-repository/i-user-repository';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {
  IUserCreationResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-creation-response";
import {UserCreationHttpResponse} from "./reponses/user-creation-http-response";
import {environment} from "../../../../environments/environment";
import {Injectable} from "@angular/core";
import {
  IUserLoginResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-login-response";
import {UserLoginHttpResponse} from "./reponses/user-login-http-response";
import {
  IUserEmailVerifyResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-email-verify-response";
import {UserEmailVerifyHttpResponse} from "./reponses/user-email-verify-http-response";
import {
  IUserRecoverPasswordRequestResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-recover-password-request-response";
import {
  IUserResetPasswordResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-reset-password-response";
import {UserRecoverPasswordByEmailHttpResponse} from "./reponses/user-recover-password-by-email-http-response";
import {UserResetPasswordHttpResponse} from "./reponses/user-reset-password-http-response";
import {IUser} from "../../../../domain/user/i-user";
import {IUserId} from "../../../../domain/user/properties/i-user-id";
import {User} from "../../../../domain/user/user";
import {UserId} from "../../../../domain/user/properties/user-id";
import {UserEmail} from "../../../../domain/user/properties/user-email";
import {IUserEmail} from "../../../../domain/user/properties/i-user-email";
import {IUserPassword} from "../../../../domain/user/properties/i-user-password";
import {IUserToken} from "../../../../domain/user/properties/i-user-token";

@Injectable()
export class HttpUserRepository implements IUserRepository {

  private _userUrl = '/v1/user';
  private _registerUserUrl = '/v1/user-access/register';
  private _loginUserUrl = '/v1/user-access/login';
  private _verifyUserMailUrl = '/v1/user-access/verify-mail';
  private _recoverUserPasswordByMailUrl = '/v1/user-access/recover-password';
  private _resetUserPasswordByTokenUrl = '/v1/user-access/reset-password';

  constructor(private http: HttpClient) {}

  get userUrl(): string {
    return this._userUrl;
  }

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

  createUserByEmail(email: IUserEmail): Observable<IUserCreationResponse> {
     return this.http.post(environment.api + this.registerUserUrl, {email: email.value}).pipe(
      map((rawHttpResponse: any) => {
        return new UserCreationHttpResponse(rawHttpResponse.error, rawHttpResponse.isSuccess);
      })
    );
  }

  loginUserByEmailAndPassword(email: IUserEmail, password: IUserPassword): Observable<IUserLoginResponse> {
    return this.http.post(environment.api + this.loginUserUrl, {email: email.value, password: password.value}).pipe(
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

  verifyUserByEmail(email: IUserEmail, token: IUserToken): Observable<IUserEmailVerifyResponse> {
    return this.http.post(environment.api + this.verifyUserMailUrl, {email: email.value, token: token}).pipe(
      map((rawHttpResponse: any) => {
        return new UserEmailVerifyHttpResponse(rawHttpResponse.error, rawHttpResponse.isSuccess);
      })
    );
  }

  recoverUserPasswordByEmail(email: IUserEmail): Observable<IUserRecoverPasswordRequestResponse> {
    return this.http.post(environment.api + this.recoverUserPasswordByMailUrl, {email: email.value}).pipe(
      map((rawHttpResponse: any) => {
        return new UserRecoverPasswordByEmailHttpResponse(rawHttpResponse.error, rawHttpResponse.isSuccess);
      })
    );
  }

  resetUserPasswordByToken(token: IUserToken, password: IUserPassword): Observable<IUserResetPasswordResponse> {
    return this.http.post(environment.api + this.resetUserPasswordByTokenUrl, {token: token.value, password: password.value}).pipe(
      map((rawHttpResponse: any) => {
        return new UserResetPasswordHttpResponse(rawHttpResponse.error, rawHttpResponse.isSuccess);
      })
    );
  }

  findUserByUserId(userId: IUserId): Observable<IUser> {
    return this.http.get(environment.api + this.userUrl + '/' + userId.value).pipe(
      map((rawHttpResponse: any) => {
        return new User(new UserId(rawHttpResponse.id), new UserEmail(rawHttpResponse));
      })
    );
  }
}
