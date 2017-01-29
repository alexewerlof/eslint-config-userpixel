'use strict';

//--------------------------------------------------------------------------------------------------
// disallow the use of `alert`, `confirm`, and `prompt`
// @see http://eslint.org/docs/rules/no-alert
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.node() ? error() : warn();
