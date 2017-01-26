'use strict';

//--------------------------------------------------------------------------------------------------
// disallow the use of undeclared variables unless mentioned in `/*global */` comments
// @see http://eslint.org/docs/rules/no-undef
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
