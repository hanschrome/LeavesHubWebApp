export interface IUserEmailVerifyHttpResponse {
  get error(): string|null;
  get isSuccess(): boolean;
}
