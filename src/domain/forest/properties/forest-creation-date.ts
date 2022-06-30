import {IForestCreationDate} from "./i-forest-creation-date";

export class ForestCreationDate implements IForestCreationDate {

  private readonly _value: number;

  constructor(creationDate: number) {
    this._value = creationDate;
  }

  get value(): number {
    return this._value;
  }
}
