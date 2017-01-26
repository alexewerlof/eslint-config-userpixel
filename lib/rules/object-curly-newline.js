'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent line breaks inside braces
// @see http://eslint.org/docs/rules/object-curly-newline
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ multiline: true });
