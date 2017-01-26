'use strict';

//--------------------------------------------------------------------------------------------------
// disallow dangling underscores in identifiers
// @see http://eslint.org/docs/rules/no-underscore-dangle
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => off();
