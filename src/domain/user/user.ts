class User {
  private readonly _userId: UserId;

  constructor(userId: UserId) {
    this._userId = userId;
  }

  get userId(): UserId {
    return this._userId;
  }
}
