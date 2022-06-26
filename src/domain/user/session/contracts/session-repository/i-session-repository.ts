import {ISession} from "../../i-session";

export interface ISessionRepository {

  findSession(): ISession;

  saveSession(session: ISession): void;

}
