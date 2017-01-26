'use strict';

//--------------------------------------------------------------------------------------------------
// disallow reassigning `function` parameters
// @see http://eslint.org/docs/rules/no-param-reassign
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ props: false });
