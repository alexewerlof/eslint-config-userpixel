'use strict';

//--------------------------------------------------------------------------------------------------
// require spread operators instead of `.apply()`
// @see http://eslint.org/docs/rules/prefer-spread
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? error() : off();
