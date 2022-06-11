import { Injectable } from '@angular/core';
import {HttpUserRepository} from "../../../../infrastructure/user/public/access/http-user-repository";
import {Observable} from "rxjs";
import {
  IUserCreationHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-creation-http-response";
import {
  IUserLoginHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-login-http-response";

@Injectable({
  providedIn: 'root'
})
export class UserAccessService {

  constructor(private httpUserRepository: HttpUserRepository) { }

  registerUserByEmail(email: string): Observable<IUserCreationHttpResponse> {
    return this.httpUserRepository.createUserByEmail(email);
  }

  loginUserByEmailAndPassword(email: string, password: string): Observable<IUserLoginHttpResponse> {
    return this.httpUserRepository.loginUserByEmailAndPassword(email, password);
  }
}
