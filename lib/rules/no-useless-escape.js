'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unnecessary escape characters
// @see http://eslint.org/docs/rules/no-useless-escape
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
