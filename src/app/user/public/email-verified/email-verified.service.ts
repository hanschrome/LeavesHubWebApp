import { Injectable } from '@angular/core';
import {HttpUserRepository} from "../../../../infrastructure/user/public/access/http-user-repository";
import {Observable} from "rxjs";
import {
  IUserEmailVerifyHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-email-verify-http-response";

@Injectable({
  providedIn: 'root'
})
export class EmailVerifiedService {

  constructor(private httpUserRepository: HttpUserRepository) { }

  verifyEmail(email: string, token: string): Observable<IUserEmailVerifyHttpResponse> {
    return this.httpUserRepository.verifyUserByEmail(email, token);
  }
}
