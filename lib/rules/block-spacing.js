'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing inside single-line blocks
// @see http://eslint.org/docs/rules/block-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('always');
