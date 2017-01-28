'use strict';

//--------------------------------------------------------------------------------------------------
// enforce getter and setter pairs in objects
// @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../../util/level'); 

module.exports = () => warn('module.exports', { allowBatchAssign: false });
