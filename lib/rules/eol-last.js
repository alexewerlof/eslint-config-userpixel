'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow newline at the end of files
// @see http://eslint.org/docs/rules/eol-last
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// TODO read from editorconfig
module.exports = () => warn();
