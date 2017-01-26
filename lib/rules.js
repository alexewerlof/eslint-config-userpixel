'use strict';

const eslint = require('eslint');

function allPossible() {
  return eslint.linter.getRules().keys();
}

module.exports = { allPossible };
