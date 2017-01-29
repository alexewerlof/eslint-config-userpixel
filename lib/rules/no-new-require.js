'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `new` operators with calls to `require`
// @see http://eslint.org/docs/rules/no-new-require
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.node() ? warn() : off();
