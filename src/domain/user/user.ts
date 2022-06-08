class User implements IUserId {
  private readonly _id: IUserId;
  private readonly _email: IUserEmail;

  constructor(id: IUserId, email: IUserEmail) {
    this._id = id;
    this._email = email;
  }

  get id(): IUserId {
    return this._id;
  }

  get email(): IUserEmail {
    return this._email;
  }
}
