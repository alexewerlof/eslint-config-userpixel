'use strict';

//--------------------------------------------------------------------------------------------------
// disallow mixed spaces and tabs for indentation
// @see http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
