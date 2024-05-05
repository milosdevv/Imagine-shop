export class User {
  constructor(
    public name: string,
    public password: string,
    public role: string,
    public email: string,
    public avatar: string,
    public userId: number
  ) {}
}
