import {ISessionRepository} from "../../../domain/user/session/contracts/session-repository/i-session-repository";
import {ISession} from "../../../domain/user/session/i-session";
import {Session} from "../../../domain/user/session/session";

export class LocalStorageSessionRepository implements ISessionRepository {

  key = 'session';

  findSession(): ISession {
    // @ts-ignore
    const localSession = JSON.parse(localStorage.getItem(this.key));

    return new Session(localSession.jwt, localSession.createdAt, localSession.expiresAt);
  }

  saveSession(session: ISession): void {
    const stringify = {
      jwt: session.jwt,
      createdAt: session.createdAt,
      expiresAt: session.expiresAt,
    }

    localStorage.setItem(this.key, JSON.stringify(stringify));
  }

}
