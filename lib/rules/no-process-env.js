'use strict';

//--------------------------------------------------------------------------------------------------
// disallow the use of `process.env`
// @see http://eslint.org/docs/rules/no-process-env
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.node() ? off() : error();
