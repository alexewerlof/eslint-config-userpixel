'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unnecessary labels
// @see http://eslint.org/docs/rules/no-extra-label
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
