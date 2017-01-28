'use strict';

//--------------------------------------------------------------------------------------------------
// enforce getter and setter pairs in objects
// @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../../util/level'); 

// This rule changes the behaviour of eslint and it doesn't matter what level is specified
module.exports = () => error();
