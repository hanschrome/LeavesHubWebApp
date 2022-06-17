import {Observable} from "rxjs";
import {IUser} from "../../user/i-user";
import {IForestList} from "../i-forest-list";
import {IForest} from "../i-forest";

export interface IForestRepositoryContract {
  getForestListByUser(user: IUser): Observable<IForestList>;

  getForestByForestId(forestId: IForestId): Observable<IForest>;
}
