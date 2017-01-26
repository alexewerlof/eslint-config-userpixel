'use strict';

//--------------------------------------------------------------------------------------------------
// enforce a maximum cyclomatic complexity allowed in a program
// @see http://eslint.org/docs/rules/complexity
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ max: 20 });
