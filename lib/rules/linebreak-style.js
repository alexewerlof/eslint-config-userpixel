'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent linebreak style
// @see http://eslint.org/docs/rules/linebreak-style
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// TODO read from editorconfig
module.exports = () => error('unix');
