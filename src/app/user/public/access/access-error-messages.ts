export class AccessErrorMessages {

  private _errors = {
    'UNKNOWN': 'An error happened on our backend.',
    'MAIL_MALFORMED': 'This does not seem to be a valid mail.',
    'EXISTING_MAIL': 'Your mail is already registered. Do you want to recover your password?',
    'WRONG_PASSWORD': 'The password is wrong.',
    'EMPTY_CAPTCHA': 'Please, pass the captcha.',
    'WRONG_CAPTCHA': 'Captcha has expired, please pass it again.',
  };

  get errors(): any{
    return this._errors;
  }

  public getErrorByKey(errorKey: string): string {
    return this.errors.hasOwnProperty(errorKey) ? this.errors[errorKey] : this.errors['UNKNOWN'];
  }

}
