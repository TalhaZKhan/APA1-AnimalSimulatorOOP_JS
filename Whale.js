import { Mammal } from "./Mammal.js";

export class Whale extends Mammal {

    #waterSprayLength

  constructor(weight,waterSprayLength) {
    super(weight);
    this.#waterSprayLength = waterSprayLength
  }

  sprayWater() {
    return `I spray water ${this.#waterSprayLength} far`;
  }
}