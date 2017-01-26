'use strict';

//--------------------------------------------------------------------------------------------------
// disallow synchronous methods
// @see http://eslint.org/docs/rules/no-sync
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = settings => settings.node() ? warn() : off();
