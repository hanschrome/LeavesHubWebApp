import {ISession} from "./i-session";

export class Session implements ISession{

  private readonly _jwt: string;
  private readonly _createdAt: number;
  private readonly _expiresAt: number;

  constructor(jwt: string, createdAt: number, expiresAt: number) {
    this._jwt = jwt;
    this._createdAt = createdAt;
    this._expiresAt = expiresAt;
  }

  get createdAt(): number {
    return this._createdAt;
  }

  get expiresAt(): number {
    return this._expiresAt;
  }

  get jwt(): string {
    return this._jwt;
  }

}
