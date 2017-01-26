'use strict';

//--------------------------------------------------------------------------------------------------
// disallow inline comments after code
// @see http://eslint.org/docs/rules/no-inline-comments
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => off();
