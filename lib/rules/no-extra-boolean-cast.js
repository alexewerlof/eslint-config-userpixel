'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unnecessary boolean casts
// @see http://eslint.org/docs/rules/no-extra-boolean-cast
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
