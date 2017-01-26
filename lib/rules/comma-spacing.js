'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing before and after commas
// @see http://eslint.org/docs/rules/comma-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ before: false, after: true });
