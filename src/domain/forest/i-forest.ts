import {IForestId} from "./properties/i-forest-id";
import {IForestTitle} from "./properties/i-forest-title";
import {IForestCreationDate} from "./properties/i-forest-creation-date";
import {IForestSummary} from "./properties/i-forest-summary";

export interface IForest {
  get id(): IForestId;

  get title(): IForestTitle;

  get summary(): IForestSummary;

  get creationDate(): IForestCreationDate;

}
