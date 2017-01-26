'use strict';

//--------------------------------------------------------------------------------------------------
// enforce sorted import declarations within modules
// @see http://eslint.org/docs/rules/sort-imports
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? warn() : off();
