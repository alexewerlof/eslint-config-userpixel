'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow strict mode directives
// @see http://eslint.org/docs/rules/strict
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es6Modules() ? off() : warn('safe');
