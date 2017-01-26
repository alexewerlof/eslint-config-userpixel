'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unnecessary calls to `.bind()`
// @see http://eslint.org/docs/rules/no-extra-bind
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
