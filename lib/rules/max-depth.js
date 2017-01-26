'use strict';

//--------------------------------------------------------------------------------------------------
// enforce a maximum depth that blocks can be nested
// @see http://eslint.org/docs/rules/max-depth
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ max: 5 });
