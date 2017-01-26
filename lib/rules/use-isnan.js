'use strict';

//--------------------------------------------------------------------------------------------------
// require calls to `isNaN()` when checking for `NaN`
// @see http://eslint.org/docs/rules/use-isnan
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
