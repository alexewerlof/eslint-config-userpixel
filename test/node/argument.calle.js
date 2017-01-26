'use strict';

function callePrinter() {
  console.log(arguments.callee);
  console.log(arguments.caller);
}

callePrinter();
