'use strict';

//--------------------------------------------------------------------------------------------------
// require rest parameters instead of `arguments`
// @see http://eslint.org/docs/rules/prefer-rest-params
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? error() : off();
