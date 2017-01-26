'use strict';

//--------------------------------------------------------------------------------------------------
// enforce dot notation whenever possible
// @see http://eslint.org/docs/rules/dot-notation
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ allowKeywords: true });
