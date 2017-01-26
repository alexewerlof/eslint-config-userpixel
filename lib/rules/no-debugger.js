'use strict';

//--------------------------------------------------------------------------------------------------
// disallow the use of `debugger`
// @see http://eslint.org/docs/rules/no-debugger
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
