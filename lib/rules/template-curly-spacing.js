'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow spacing around embedded expressions of template strings
// @see http://eslint.org/docs/rules/template-curly-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? error() : off();
