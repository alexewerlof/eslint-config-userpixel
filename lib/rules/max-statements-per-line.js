'use strict';

//--------------------------------------------------------------------------------------------------
// enforce a maximum number of statements allowed per line
// @see http://eslint.org/docs/rules/max-statements-per-line
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ max: 2 });
