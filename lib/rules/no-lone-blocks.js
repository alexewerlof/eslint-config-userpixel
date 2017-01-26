'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unnecessary nested blocks
// @see http://eslint.org/docs/rules/no-lone-blocks
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = settings => settings.es(6) ? off() : error();
