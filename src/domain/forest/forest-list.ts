import {IForestList} from "./i-forest-list";
import {IForest} from "./i-forest";

export class ForestList implements IForestList {

  private readonly _forestList: IForest[];

  constructor(forestList: IForest[]) {
    this._forestList = forestList;
  }

  get forestList(): IForest[] {
    return this._forestList;
  }

}
