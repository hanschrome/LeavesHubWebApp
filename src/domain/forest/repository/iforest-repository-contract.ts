import {Observable} from "rxjs";
import {IUser} from "../../user/i-user";

interface IForestRepositoryContract {
  getForestListByUser(user: IUser): Observable<IForestList>;

  getForestByForestId(forestId: IForestId): Observable<IForest>;
}
