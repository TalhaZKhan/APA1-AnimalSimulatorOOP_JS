import { MallardDuck } from './MallardDuck.js';
import { TuftedDuck } from './TuftedDuck.js';
import { Jaguar } from './Jaguar.js';
import { Ostrich } from './Ostrich.js';
import { Whale } from './Whale.js';

const whal1 = new Whale(20000, 23,'2 years');
const duck1 = new MallardDuck(334);
const duck2 = new TuftedDuck(256);

console.log(whal1.getPregnant())

