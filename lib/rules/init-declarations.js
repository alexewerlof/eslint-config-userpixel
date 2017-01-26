'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow initialization in variable declarations
// @see http://eslint.org/docs/rules/init-declarations
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => off();
