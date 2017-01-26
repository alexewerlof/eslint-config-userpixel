'use strict';

//--------------------------------------------------------------------------------------------------
// disallow irregular whitespace outside of strings and comments
// @see http://eslint.org/docs/rules/no-irregular-whitespace
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
