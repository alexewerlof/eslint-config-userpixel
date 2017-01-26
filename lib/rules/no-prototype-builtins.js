'use strict';

//--------------------------------------------------------------------------------------------------
// disallow calling some `Object.prototype` methods directly on objects
// @see http://eslint.org/docs/rules/no-prototype-builtins
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
