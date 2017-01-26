'use strict';

//--------------------------------------------------------------------------------------------------
// disallow variable redeclaration
// @see http://eslint.org/docs/rules/no-redeclare
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error({ builtinGlobals: true });
