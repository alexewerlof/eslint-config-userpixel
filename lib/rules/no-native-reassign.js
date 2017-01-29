'use strict';

//--------------------------------------------------------------------------------------------------
// disallow assignments to native objects or read-only global variables
// @see http://eslint.org/docs/rules/no-native-reassign
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => off();
