'use strict';

//--------------------------------------------------------------------------------------------------
// enforce getter and setter pairs in objects
// @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../../util/level'); 

module.exports = (settings) => settings.es6Modules() ? warn() : off();
