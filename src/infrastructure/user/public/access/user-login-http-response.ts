import {
  IUserLoginResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-login-response";

export class UserLoginHttpResponse implements IUserLoginResponse {

  private readonly _error: string|null;
  private readonly _is_success: boolean;
  private readonly _expiresInSeconds: number;
  private readonly _jwt: string;

  constructor(error: string | null, is_success: boolean, expiresInSeconds: number, jwt: string) {
    this._error = error;
    this._is_success = is_success;
    this._expiresInSeconds = expiresInSeconds;
    this._jwt = jwt;
  }

  get error(): string | null {
    return this._error;
  }

  get isSuccess(): boolean {
    return this._is_success;
  }

  get expiresInSeconds(): number {
    return this._expiresInSeconds;
  }

  get jwt(): string {
    return this._jwt;
  }
}
