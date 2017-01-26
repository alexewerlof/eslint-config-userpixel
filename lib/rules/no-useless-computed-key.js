'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unnecessary computed property keys in object literals
// @see http://eslint.org/docs/rules/no-useless-computed-key
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
