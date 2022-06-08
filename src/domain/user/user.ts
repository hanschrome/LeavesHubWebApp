class User {
  private readonly _userId: IUserId;
  private readonly _userEmail: IUserEmail;

  constructor(userId: IUserId, userEmail: IUserEmail) {
    this._userId = userId;
    this._userEmail = userEmail;
  }

  get userId(): IUserId {
    return this._userId;
  }

  get userEmail(): IUserEmail {
    return this._userEmail;
  }
}
