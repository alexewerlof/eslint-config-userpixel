'use strict';

//--------------------------------------------------------------------------------------------------
// enforce the use of variables within the scope they are defined
// @see http://eslint.org/docs/rules/block-scoped-var
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
