'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow method and property shorthand syntax for object literals
// @see http://eslint.org/docs/rules/object-shorthand
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? warn('always', {
  avoidQuotes: true,
  ignoreConstructors: true,
  avoidExplicitReturnArrows: true
}) : off();
