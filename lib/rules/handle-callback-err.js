'use strict';

//--------------------------------------------------------------------------------------------------
// require error handling in callbacks
// @see http://eslint.org/docs/rules/handle-callback-err
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.node() ? error() : off();
