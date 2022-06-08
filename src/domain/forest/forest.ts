class Forest implements IForest {
  private readonly _id: IForestId;
  private readonly _title: IForestTitle;
  private readonly _summary: IForestTitle;
  private readonly _creationDate: IForestCreationDate;

  constructor(id: IForestId, title: IForestTitle, summary: IForestTitle, creationDate: IForestCreationDate) {
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

  get summary(): IForestTitle {
    return this._summary;
  }

  get creationDate(): IForestCreationDate {
    return this._creationDate;
  }
}
