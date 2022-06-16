import { Injectable } from '@angular/core';
import {HttpUserRepository} from "../../../../infrastructure/user/public/access/http-user-repository";
import {
  IUserRecoverPasswordRequestResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-recover-password-request-response";
import {Observable} from "rxjs";
import {IUserEmail} from "../../../../domain/user/properties/i-user-email";

@Injectable({
  providedIn: 'root'
})
export class LostPasswordService {

  constructor(private httpUserRepository: HttpUserRepository) { }

  recoverUserPasswordByEmail(email: IUserEmail): Observable<IUserRecoverPasswordRequestResponse> {
    return this.httpUserRepository.recoverUserPasswordByEmail(email);
  }
}
