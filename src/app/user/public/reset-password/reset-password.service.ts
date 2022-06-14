import { Injectable } from '@angular/core';
import {HttpUserRepository} from "../../../../infrastructure/user/public/access/http-user-repository";
import {Observable} from "rxjs";
import {
  IUserResetPasswordHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-reset-password-http-response";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private httpUserRepository: HttpUserRepository) { }

  resetUserPasswordByToken(token: string, password: string): Observable<IUserResetPasswordHttpResponse> {
    return this.httpUserRepository.resetUserPasswordByToken(token, password);
  }
}
