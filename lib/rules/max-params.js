'use strict';

//--------------------------------------------------------------------------------------------------
// enforce a maximum number of parameters in function definitions
// @see http://eslint.org/docs/rules/max-params
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ max: 7 });
