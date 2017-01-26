'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `Object` constructors
// @see http://eslint.org/docs/rules/no-new-object
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
