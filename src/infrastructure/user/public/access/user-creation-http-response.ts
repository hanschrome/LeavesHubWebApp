import {
  IUserCreationHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-creation-http-response";

export class UserCreationHttpResponse implements IUserCreationHttpResponse {

  private readonly _error_code: string;
  private readonly _is_success: boolean;

  constructor(error_code: string, is_success: boolean) {
    this._error_code = error_code;
    this._is_success = is_success;
  }

  get errorCode(): string {
    return this._error_code;
  }

  get isSuccess(): boolean {
    return this._is_success;
  }

}
