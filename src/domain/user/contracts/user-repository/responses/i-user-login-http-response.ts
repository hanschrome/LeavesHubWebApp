export interface IUserLoginHttpResponse {
  get error(): string|null;
  get isSuccess(): boolean;
  get jwt(): string;
  get expiresInSeconds(): number;
}
