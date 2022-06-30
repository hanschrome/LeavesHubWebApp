import {IForestId} from "./i-forest-id";

export class ForestId implements IForestId {

  private readonly _value: string;

  constructor(id: string) {
    this._value = id;
  }

  get value(): string {
    return this._value;
  }

}
