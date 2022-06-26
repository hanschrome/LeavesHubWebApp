export interface ISession {

  get jwt(): string;

  get createdAt(): number;

  get expiresAt(): number;

}
