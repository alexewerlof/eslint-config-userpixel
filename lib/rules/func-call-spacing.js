'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow spacing between function identifiers and their invocations
// @see http://eslint.org/docs/rules/func-call-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
