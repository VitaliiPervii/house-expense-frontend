export class User {
  constructor(
    public email: string,
    public password: string,
    public username: string,
    public salt?: string,
    public id?: number
  ) {}
}
