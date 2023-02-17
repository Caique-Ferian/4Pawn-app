export default class Password {
  private readonly password: string;
  //https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  private regex = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$');
  constructor(password: string) {
    if (!this.regex.test(password)) {
      throw new Error('Invalid password');
    }
    this.password = password;
  }

  public get value(): string {
    return this.password;
  }
}
