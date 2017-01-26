'use strict';

//--------------------------------------------------------------------------------------------------
// enforce that class methods utilize `this`
// @see http://eslint.org/docs/rules/class-methods-use-this
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
