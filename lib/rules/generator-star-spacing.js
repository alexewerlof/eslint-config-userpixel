'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing around `*` operators in generator functions
// @see http://eslint.org/docs/rules/generator-star-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.es(6) ? warn('after') : off();
