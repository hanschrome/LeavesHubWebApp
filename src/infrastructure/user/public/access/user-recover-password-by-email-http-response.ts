import {
  IUserRecoverPasswordRequestResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-recover-password-request-response";

export class UserRecoverPasswordByEmailHttpResponse implements IUserRecoverPasswordRequestResponse {

  private readonly _error: string|null;
  private readonly _is_success: boolean;

  constructor(error: string | null, is_success: boolean) {
    this._error = error;
    this._is_success = is_success;
  }

  get error(): string | null {
    return this._error;
  }

  get isSuccess(): boolean {
    return this._is_success;
  }
}
