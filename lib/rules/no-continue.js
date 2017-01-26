'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `continue` statements
// @see http://eslint.org/docs/rules/no-continue
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
