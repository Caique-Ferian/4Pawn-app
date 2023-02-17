export default class Email {
  private readonly email: string;
  //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  private regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  constructor(email: string) {
    if (!this.regex.test(email)) {
      throw new Error('Invalid email');
    }
    this.email = email;
  }

  public get value(): string {
    return this.email;
  }
}
