'use strict';

//--------------------------------------------------------------------------------------------------
// require the use of `===` and `!==`
// @see http://eslint.org/docs/rules/eqeqeq
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error('always');
