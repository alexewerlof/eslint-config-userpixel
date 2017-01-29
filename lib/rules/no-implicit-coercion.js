'use strict';

//--------------------------------------------------------------------------------------------------
// disallow shorthand type conversions
// @see http://eslint.org/docs/rules/no-implicit-coercion
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
