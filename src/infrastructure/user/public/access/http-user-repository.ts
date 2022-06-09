import {IUserRepository} from '../../../../domain/user/contracts/user-repository/i-user-repository';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export class HttpUserRepository implements IUserRepository {

  constructor(private http: HttpClient) {
  }

  createUserByEmail(email: string): Observable<IUserCreationHttpResponse> {
    return this.http.post('', {}).pipe(
      map((rawHttpResponse) => {
        const httpResponse = new UserCreationHttpResponse();

        return httpResponse;
      })
    );
  }
}
