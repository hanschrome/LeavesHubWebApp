import {
  IUserEmailVerifyHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-email-verify-http-response";

export class UserEmailVerifyHttpResponse implements IUserEmailVerifyHttpResponse {

  private readonly _error: string | null;
  private readonly _isSuccess: boolean;

  constructor(error: string | null, isSuccess: boolean) {
    this._error = error;
    this._isSuccess = isSuccess;
  }

  get error(): string | null {
    return this._error;
  }

  get isSuccess(): boolean {
    return this._isSuccess;
  }

}
