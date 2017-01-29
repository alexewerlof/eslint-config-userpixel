'use strict';

const GreetingStr = 'Hello';

global.globalThing = 2;

// This is a class
class Sample {

  // eslint-disable-next-line class-methods-use-this
  sayHello(name) {
    console.log(`${GreetingStr} ${name}`);
  }

  // eslint-disable-next-line class-methods-use-this
  age(n) {
    switch (Math.round(n)) {
      case 0:
        return 'Aww, a little baby';
      case 1:
        return 'A child';
      case 2:
        return 'wannabe';
      default:
        return 'Big enough'
    }
  }

}

const obj = {
  x: 2,
  y: 3
};

// eslint-disable-next-line no-unused-vars
const person = {
  firstName: 'Alex',
  lastName: 'Ewerlöf'
};

const arr = [
  1,
  3,
  5,
];

const sample = new Sample();
sample
  .sayHello('Alex');

const obj2 = {
  v() {},
  w: y => y,
  * x() {},
  [y]() {},
  z,
  GreetingStr,
  sayGoodbye(name) {
    return `bye${name}`;
  }
};

exports.Sample = Sample;
exports.obj = obj;
exports.obj2 = obj2;
exports.arr = arr;
