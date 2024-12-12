import { Bird } from "./Bird.js";

export class Ostrich extends Bird {
  constructor(weight) {
    super(weight);
  }

  fly() {
    return "I'm cannot fly , I am an ostrich you idiot";
  }

  quack() {
    return "Boom Shakalaka!";
  }

  swim() {
    return "Great job genius, Im Drowning!!";
  }
}