'use strict';

//--------------------------------------------------------------------------------------------------
// disallow duplicate keys in object literals
// @see http://eslint.org/docs/rules/no-dupe-keys
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
