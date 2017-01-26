'use strict';

const GreetingStr = 'Hello';

global.globalThing = 2;

// This is a class
class Sample {

  sayHello(name) {
    console.log(`${GreetingStr} ${name}`);
  }

  age(n) {
    switch (Math.round(n)) {
      case 0:
        return 'Aww, a little baby';
      case 1:
        return 'A child';
      case 2:
        return 'wannabe';
    }
    return 'Big enough';
  }

}

var obj = {
  x: 2,
  y: 3
};

const person = {
  firstName: 'Alex',
  lastName: 'Ewerlöf'
}

var arr = [
  1,
  3,
  5,
]

var sample = new Sample();
sample
  .sayHello('Alex');

var obj2 = {
  v() {},
  w: (y) => y,
  *x() {},
  [y]() {},
  z,
  GreetingStr,
  sayGoodbye(name) {
    return 'bye' + name;
  }
}

exports.Sample = Sample;
exports.obj = obj;
exports.obj2 = obj2;
exports.arr = arr;
