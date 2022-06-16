import { Injectable } from '@angular/core';
import {HttpUserRepository} from "../../../../infrastructure/user/public/access/http-user-repository";
import {Observable} from "rxjs";
import {
  IUserResetPasswordResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-reset-password-response";
import {IUserPassword} from "../../../../domain/user/properties/i-user-password";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private httpUserRepository: HttpUserRepository) { }

  resetUserPasswordByToken(token: string, password: IUserPassword): Observable<IUserResetPasswordResponse> {
    return this.httpUserRepository.resetUserPasswordByToken(token, password);
  }
}
