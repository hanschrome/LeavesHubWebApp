export class UserIdException extends Error implements IException {
  constructor(message: string) {
    super();
    this.name = 'USER_ID_EXCEPTION'
    this.message = message;
  }
}
