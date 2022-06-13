import {
  IUserResetPasswordHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-reset-password-http-response";

export class UserResetPasswordHttpResponse implements IUserResetPasswordHttpResponse {
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
