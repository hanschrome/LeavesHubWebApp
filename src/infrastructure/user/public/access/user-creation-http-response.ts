import {
  IUserCreationHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-creation-http-response";

export class UserCreationHttpResponse implements IUserCreationHttpResponse {

  private _error_code: string;
  private _is_success: boolean;

  constructor(error_code: string, is_success: boolean) {
    this._error_code = error_code;
    this._is_success = is_success;
  }

  get errorCode(): string {
    return "";
  }

  get isSuccess(): boolean {
    return false;
  }

}
