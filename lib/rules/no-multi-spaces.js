'use strict';

//--------------------------------------------------------------------------------------------------
// disallow multiple spaces
// @see http://eslint.org/docs/rules/no-multi-spaces
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();