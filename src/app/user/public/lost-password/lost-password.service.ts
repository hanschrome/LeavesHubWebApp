import { Injectable } from '@angular/core';
import {HttpUserRepository} from "../../../../infrastructure/user/public/access/http-user-repository";
import {
  IUserRecoverPasswordRequestHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-recover-password-request-http-response";
import {Observable} from "rxjs";
import {
  IUserResetPasswordHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-reset-password-http-response";

@Injectable({
  providedIn: 'root'
})
export class LostPasswordService {

  constructor(private httpUserRepository: HttpUserRepository) { }

  recoverUserPasswordByEmail(email: string): Observable<IUserRecoverPasswordRequestHttpResponse> {
    return this.httpUserRepository.recoverUserPasswordByEmail(email);
  }

  resetUserPasswordByToken(token: string): Observable<IUserResetPasswordHttpResponse> {
    return this.httpUserRepository.resetUserPasswordByToken(token);
  }
}
