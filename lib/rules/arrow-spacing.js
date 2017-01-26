'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing before and after the arrow in arrow functions
// @see http://eslint.org/docs/rules/arrow-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ?
  warn({ before: true, after: true }) : off();
