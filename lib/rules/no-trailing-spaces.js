'use strict';

//--------------------------------------------------------------------------------------------------
// disallow trailing whitespace at the end of lines
// @see http://eslint.org/docs/rules/no-trailing-spaces
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// TODO read from editorconfig
module.exports = () => off();
