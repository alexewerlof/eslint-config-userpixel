'use strict';

//--------------------------------------------------------------------------------------------------
// disallow the use of `console`
// @see http://eslint.org/docs/rules/no-console
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.node() ? off() : warn();
