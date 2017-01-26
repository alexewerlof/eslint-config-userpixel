'use strict';

//--------------------------------------------------------------------------------------------------
// require symbol descriptions
// @see http://eslint.org/docs/rules/symbol-description
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? error() : off();
