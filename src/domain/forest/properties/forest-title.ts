import {IForestTitle} from "./i-forest-title";

export class ForestTitle implements IForestTitle {

  private readonly _value: string;

  constructor(title: string) {
    this._value = title;
  }

  get value(): string {
    return this._value;
  }

}
