'use strict';

//--------------------------------------------------------------------------------------------------
// disallow specified syntax
// @see http://eslint.org/docs/rules/no-restricted-syntax
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.es(6) ? off() : error(
  'ForInStatement',
  'ForOfStatement',
  'LabeledStatement',
  'WithStatement'
);
