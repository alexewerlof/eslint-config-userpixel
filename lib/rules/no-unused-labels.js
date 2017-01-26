'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unused labels
// @see http://eslint.org/docs/rules/no-unused-labels
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
