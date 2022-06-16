export interface IUserLoginResponse {
  get error(): string|null;
  get isSuccess(): boolean;
  get jwt(): string;
  get expiresInSeconds(): number;
}
