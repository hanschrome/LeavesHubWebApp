export interface IUserLoginHttpResponse {
  get jwt(): string;
  get expiresInSeconds(): number;
}
