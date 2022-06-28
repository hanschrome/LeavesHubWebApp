import {Injectable} from '@angular/core';
import {IForestRepositoryContract} from "../../domain/forest/repository/i-forest-repository-contract";
import {map, Observable} from "rxjs";
import {IForest} from "../../domain/forest/i-forest";
import {IForestList} from "../../domain/forest/i-forest-list";
import {IUser} from "../../domain/user/i-user";
import {HttpClient} from "@angular/common/http";
import {Forest} from "../../domain/forest/forest";
import {ForestId} from "../../domain/forest/properties/forest-id";
import {ForestTitle} from "../../domain/forest/properties/forest-title";
import {ForestSummary} from "../../domain/forest/properties/forest-summary";
import {ForestCreationDate} from "../../domain/forest/properties/forest-creation-date";
import {ForestList} from "../../domain/forest/forest-list";

@Injectable({
  providedIn: 'root'
})
export class RestForestRepositoryService implements IForestRepositoryContract {

  constructor(private http: HttpClient) {
  }

  getForestByForestId(forestId: IForestId): Observable<IForest> {
    return this.http.get('').pipe(
      map((response: any) => {
          return new Forest(
            new ForestId(response.id),
            new ForestTitle(response.title),
            new ForestSummary(response.summary),
            new ForestCreationDate(response.creationDate)
          );
        }
      ));
  }

  getForestListByUser(user: IUser): Observable<IForestList> {
    return this.http.get('').pipe(
      map((response: any) => {
          const forests = response.forests;
          const forestList = [];

          for (let i = 0; i < forests.length; i++) {
            forestList.push(new Forest(
                new ForestId(response.id),
                new ForestTitle(response.title),
                new ForestSummary(response.summary),
                new ForestCreationDate(response.creationDate)
              )
            );
          }

          return new ForestList(forestList);
        }
      ));
  }

}
