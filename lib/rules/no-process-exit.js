'use strict';

//--------------------------------------------------------------------------------------------------
// disallow the use of `process.exit()`
// @see http://eslint.org/docs/rules/no-process-exit
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.node() ? warn() : error();
