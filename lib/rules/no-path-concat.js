'use strict';

//--------------------------------------------------------------------------------------------------
// disallow string concatenation with `__dirname` and `__filename`
// @see http://eslint.org/docs/rules/no-path-concat
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = settings => settings.node() ? warn() : error();
