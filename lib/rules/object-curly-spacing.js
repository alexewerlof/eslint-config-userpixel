'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing inside braces
// @see http://eslint.org/docs/rules/object-curly-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('always');
