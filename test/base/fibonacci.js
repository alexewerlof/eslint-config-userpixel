'use strict';

function fibonacci(n) {
  // eslint-disable-next-line id-length
  let a = 1,
  // eslint-disable-next-line id-length
    b = 0,
    num = n;
    
  while (num >= 0) {
    [ a, b ] = [ a + b, a ];
    num--;
  }

  return b;
}

exports.fibonacci = fibonacci;

