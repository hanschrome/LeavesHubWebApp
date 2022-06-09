import {IUserRepository} from '../../../../domain/user/contracts/user-repository/i-user-repository';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {
  IUserCreationHttpResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-creation-http-response";
import {UserCreationHttpResponse} from "./user-creation-http-response";
import {environment} from "../../../../environments/environment";

export class HttpUserRepository implements IUserRepository {

  private _url = '/v1/register'

  constructor(private http: HttpClient) {}

  createUserByEmail(email: string): Observable<IUserCreationHttpResponse> {
     return this.http.post(environment.api + this.url, {email: email}).pipe(
      map((rawHttpResponse: any) => {
        return new UserCreationHttpResponse(rawHttpResponse.error, rawHttpResponse.isSuccess);
      })
    );
  }

  get url(): string {
    return this._url
  }
}
