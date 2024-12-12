export class Animal {
  #weight;

  constructor(weight) {
    this.#weight = weight;
  }

  get weight() {
    return this.#weight;
  }

  set weight(weight) {
    this.#weight = weight;
  }

  display() {}

  feed() {}
}
