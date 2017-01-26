'use strict';

//--------------------------------------------------------------------------------------------------
// disallow specified global variables
// @see http://eslint.org/docs/rules/no-restricted-globals
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error('event');
