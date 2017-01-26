'use strict';

//--------------------------------------------------------------------------------------------------
// require `default` cases in `switch` statements
// @see http://eslint.org/docs/rules/default-case
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ commentPattern: '^no default$' });
