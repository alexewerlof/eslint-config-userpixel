'use strict';

//--------------------------------------------------------------------------------------------------
// disallow duplicate case labels
// @see http://eslint.org/docs/rules/no-duplicate-case
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
