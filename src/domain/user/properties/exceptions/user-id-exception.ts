class UserIdException extends Error {
  constructor(message: string) {
    super();
    this.name = 'USER_ID_EXCEPTION'
    this.message = message;
  }
}
