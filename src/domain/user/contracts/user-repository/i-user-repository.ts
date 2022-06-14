import {Observable} from "rxjs";
import {IUserCreationHttpResponse} from "./responses/i-user-creation-http-response";
import {IUserLoginHttpResponse} from "./responses/i-user-login-http-response";
import {IUserEmailVerifyHttpResponse} from "./responses/i-user-email-verify-http-response";
import {IUserRecoverPasswordRequestHttpResponse} from "./responses/i-user-recover-password-request-http-response";
import {IUserResetPasswordHttpResponse} from "./responses/i-user-reset-password-http-response";

export interface IUserRepository {
  createUserByEmail(email: string): Observable<IUserCreationHttpResponse>;

  loginUserByEmailAndPassword(email: string, password: string): Observable<IUserLoginHttpResponse>;

  verifyUserByEmail(email: string, token: string): Observable<IUserEmailVerifyHttpResponse>;

  recoverUserPasswordByEmail(email: string): Observable<IUserRecoverPasswordRequestHttpResponse>;

  resetUserPasswordByToken(token: string, password: string): Observable<IUserResetPasswordHttpResponse>;
}
