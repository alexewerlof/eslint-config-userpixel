'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unnecessary concatenation of literals or template literals
// @see http://eslint.org/docs/rules/no-useless-concat
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
