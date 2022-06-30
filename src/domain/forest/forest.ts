import {IForest} from "./i-forest";
import {IForestId} from "./properties/i-forest-id";
import {IForestTitle} from "./properties/i-forest-title";
import {IForestSummary} from "./properties/i-forest-summary";
import {IForestCreationDate} from "./properties/i-forest-creation-date";

export class Forest implements IForest {
  private readonly _id: IForestId;
  private readonly _title: IForestTitle;
  private readonly _summary: IForestSummary;
  private readonly _creationDate: IForestCreationDate;

  constructor(id: IForestId, title: IForestTitle, summary: IForestSummary, creationDate: IForestCreationDate) {
    this._id = id;
    this._title = title;
    this._summary = summary;
    this._creationDate = creationDate;
  }

  get id(): IForestId {
    return this._id;
  }

  get title(): IForestTitle {
    return this._title;
  }

  get summary(): IForestSummary {
    return this._summary;
  }

  get creationDate(): IForestCreationDate {
    return this._creationDate;
  }
}
