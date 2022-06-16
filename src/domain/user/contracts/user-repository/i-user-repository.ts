import {Observable} from "rxjs";
import {IUserCreationResponse} from "./responses/i-user-creation-response";
import {IUserLoginResponse} from "./responses/i-user-login-response";
import {IUserEmailVerifyResponse} from "./responses/i-user-email-verify-response";
import {IUserRecoverPasswordRequestResponse} from "./responses/i-user-recover-password-request-response";
import {IUserResetPasswordResponse} from "./responses/i-user-reset-password-response";
import {IUserId} from "../../properties/i-user-id";
import {IUser} from "../../i-user";
import {IUserEmail} from "../../properties/i-user-email";
import {IUserPassword} from "../../properties/i-user-password";

export interface IUserRepository {
  findUserByUserId(userId: IUserId): Observable<IUser>;

  createUserByEmail(email: IUserEmail): Observable<IUserCreationResponse>;

  loginUserByEmailAndPassword(email: IUserEmail, password: IUserPassword): Observable<IUserLoginResponse>;

  verifyUserByEmail(email: IUserEmail, token: string): Observable<IUserEmailVerifyResponse>;

  recoverUserPasswordByEmail(email: IUserEmail): Observable<IUserRecoverPasswordRequestResponse>;

  resetUserPasswordByToken(token: string, password: IUserPassword): Observable<IUserResetPasswordResponse>;
}
