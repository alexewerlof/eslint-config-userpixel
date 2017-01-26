'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing before blocks
// @see http://eslint.org/docs/rules/space-before-blocks
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('always');
