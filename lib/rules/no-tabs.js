'use strict';

//--------------------------------------------------------------------------------------------------
// disallow all tabs
// @see http://eslint.org/docs/rules/no-tabs
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
