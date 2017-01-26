'use strict';

//--------------------------------------------------------------------------------------------------
// enforce spacing between rest and spread operators and their expressions
// @see http://eslint.org/docs/rules/rest-spread-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? warn('never') : off();
