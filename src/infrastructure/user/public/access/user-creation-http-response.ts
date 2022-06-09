import {
  IUserCreationHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-creation-http-response";

export class UserCreationHttpResponse implements IUserCreationHttpResponse {
  get errorCode(): string {
    return "";
  }

  get isSuccess(): boolean {
    return false;
  }

}
