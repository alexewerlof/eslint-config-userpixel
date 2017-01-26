'use strict';

//--------------------------------------------------------------------------------------------------
// require `require()` calls to be placed at top-level module scope
// @see http://eslint.org/docs/rules/global-require
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = settings => settings.isCommonJs() ? warn() : off();
