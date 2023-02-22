export default class PetNotFound extends Error {
  constructor() {
    super('Pet not found.');
  }
}
