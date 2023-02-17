export default class LoginUnsuccessful extends Error {
  constructor() {
    super('Username or password incorrect.');
  }
}
