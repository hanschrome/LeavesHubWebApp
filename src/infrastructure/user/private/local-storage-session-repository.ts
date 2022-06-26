import {ISessionRepository} from "../../../domain/user/session/contracts/session-repository/i-session-repository";
import {ISession} from "../../../domain/user/session/i-session";
import {Session} from "../../../domain/user/session/session";

export class LocalStorageSessionRepository implements ISessionRepository {

  findSession(): ISession {
    return new Session('', 0, 0);
  }

  saveSession(session: ISession): void {
  }

}
