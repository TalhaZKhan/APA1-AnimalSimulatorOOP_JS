import { Animal } from "./Animal.js";

export class Mammal extends Animal {
    #pregnPeriod
  
    constructor(weight,pregnPeriod) {
    super(weight);
    this.#pregnPeriod = pregnPeriod;
  }

  getPregnant() {
    return "ohh yeahh, i will now be pregnant for " + this.#pregnPeriod 
  }

}