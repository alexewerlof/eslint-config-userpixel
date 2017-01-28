'use strict';

//--------------------------------------------------------------------------------------------------
// enforce getter and setter pairs in objects
// @see https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/handle-done-callback.md
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../../util/level'); 

module.exports = () => error();