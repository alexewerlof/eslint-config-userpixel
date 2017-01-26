'use strict';

//--------------------------------------------------------------------------------------------------
// disallow whitespace before properties
// @see http://eslint.org/docs/rules/no-whitespace-before-property
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
