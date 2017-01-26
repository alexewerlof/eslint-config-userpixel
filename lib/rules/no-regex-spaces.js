'use strict';

//--------------------------------------------------------------------------------------------------
// disallow multiple spaces in regular expressions
// @see http://eslint.org/docs/rules/no-regex-spaces
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
