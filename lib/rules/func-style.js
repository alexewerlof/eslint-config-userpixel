'use strict';

//--------------------------------------------------------------------------------------------------
// enforce the consistent use of either `function` declarations or expressions
// @see http://eslint.org/docs/rules/func-style
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('declaration', { allowArrowFunctions: true });
