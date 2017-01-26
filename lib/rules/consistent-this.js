'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent naming when capturing the current execution context
// @see http://eslint.org/docs/rules/consistent-this
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('that', 'self', '_this');
