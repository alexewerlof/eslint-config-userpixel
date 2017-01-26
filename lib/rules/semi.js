'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow semicolons instead of ASI
// @see http://eslint.org/docs/rules/semi
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('always', { omitLastInOneLineBlock: true });
