'use strict';

//--------------------------------------------------------------------------------------------------
// disallow deleting variables
// @see http://eslint.org/docs/rules/no-delete-var
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
