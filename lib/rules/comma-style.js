'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent comma style
// @see http://eslint.org/docs/rules/comma-style
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('last');
