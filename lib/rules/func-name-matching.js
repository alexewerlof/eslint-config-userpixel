'use strict';

//--------------------------------------------------------------------------------------------------
// require function names to match the name of the variable or property to which they are assigned
// @see http://eslint.org/docs/rules/func-name-matching
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ includeCommonJSModuleExports: false });
