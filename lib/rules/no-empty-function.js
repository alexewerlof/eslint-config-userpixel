'use strict';

//--------------------------------------------------------------------------------------------------
// disallow empty functions
// @see http://eslint.org/docs/rules/no-empty-function
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  allow: [
    'functions',
    'methods',
    'constructors'
  ]
});
