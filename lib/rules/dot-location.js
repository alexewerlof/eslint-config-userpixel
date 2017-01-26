'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent newlines before and after dots
// @see http://eslint.org/docs/rules/dot-location
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error('property');