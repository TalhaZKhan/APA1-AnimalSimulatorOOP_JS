import { Mammal } from "./Mammal.js";

export class Jaguar extends Mammal {

    #roarvolume

  constructor(weight,roarVolume,pregnPeriod) {
    super(weight,pregnPeriod);
    this.#roarvolume = roarVolume;
  }

  roar() {
    return "ROAARRRRRR!!!!";
  }

  feed() {
    return "I kill and eat my prey.";
  }
}