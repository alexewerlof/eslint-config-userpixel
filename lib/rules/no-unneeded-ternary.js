'use strict';

//--------------------------------------------------------------------------------------------------
// disallow ternary operators when simpler alternatives exist
// @see http://eslint.org/docs/rules/no-unneeded-ternary
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ defaultAssignment: false });
