export class ForestSummary implements IForestSummary {

  private readonly _value: string;

  constructor(summary: string) {
    this._value = summary;
  }

  get value(): string {
    return this._value;
  }

}
