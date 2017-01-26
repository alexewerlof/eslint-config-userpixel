'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unnecessary calls to `.call()` and `.apply()`
// @see http://eslint.org/docs/rules/no-useless-call
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
