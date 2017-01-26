'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unnecessary `return await`
// @see http://eslint.org/docs/rules/no-return-await
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
