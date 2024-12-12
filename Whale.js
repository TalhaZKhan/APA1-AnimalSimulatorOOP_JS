import { Mammal } from "./Mammal.js";

export class Whale extends Mammal {

    #waterSprayLength

  constructor(weight,waterSprayLength,pregnPeriod) {
    super(weight,pregnPeriod);
    this.#waterSprayLength = waterSprayLength
  }

  sprayWater() {
    return `I spray water ${this.#waterSprayLength} meters far`;
  }
}