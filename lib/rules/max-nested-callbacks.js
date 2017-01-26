'use strict';

//--------------------------------------------------------------------------------------------------
// enforce a maximum depth that callbacks can be nested
// @see http://eslint.org/docs/rules/max-nested-callbacks
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ max: 5 });
