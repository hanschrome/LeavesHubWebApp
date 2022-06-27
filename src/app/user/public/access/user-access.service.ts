import { Injectable } from '@angular/core';
import {HttpUserRepository} from "../../../../infrastructure/user/public/access/http-user-repository";
import {Observable} from "rxjs";
import {
  IUserCreationResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-creation-response";
import {
  IUserLoginResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-login-response";
import {IUserEmail} from "../../../../domain/user/properties/i-user-email";
import {IUserPassword} from "../../../../domain/user/properties/i-user-password";
import {LocalStorageSessionRepository} from "../../../../infrastructure/user/private/local-storage-session-repository";
import {Session} from "../../../../domain/user/session/session";
import {ISession} from "../../../../domain/user/session/i-session";

@Injectable({
  providedIn: 'root'
})
export class UserAccessService {

  constructor(
    private httpUserRepository: HttpUserRepository,
    private localStorageSessionRepository: LocalStorageSessionRepository,
  ) { }

  registerUserByEmail(email: IUserEmail): Observable<IUserCreationResponse> {
    return this.httpUserRepository.createUserByEmail(email);
  }

  loginUserByEmailAndPassword(email: IUserEmail, password: IUserPassword): Observable<IUserLoginResponse> {
    return this.httpUserRepository.loginUserByEmailAndPassword(email, password);
  }

  saveSession(jwt: string, createdAt: number, expiresAt: number): void {
    this.localStorageSessionRepository.saveSession(new Session(jwt, createdAt, expiresAt));
  }

  loadSession(): ISession {
    return this.localStorageSessionRepository.findSession();
  }
}
