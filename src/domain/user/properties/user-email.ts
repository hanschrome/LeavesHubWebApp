class UserEmail implements IProperty, IUserEmail{
  private readonly _email: string;

  constructor(email: string) {
    this._email = email;
  }

  get email(): string {
    return this._email;
  }

  validate(): void {
    // @todo regex
  }
}
