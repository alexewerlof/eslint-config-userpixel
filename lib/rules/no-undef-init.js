'use strict';

//--------------------------------------------------------------------------------------------------
// disallow initializing variables to `undefined`
// @see http://eslint.org/docs/rules/no-undef-init
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
