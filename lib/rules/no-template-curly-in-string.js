'use strict';

//--------------------------------------------------------------------------------------------------
// disallow template literal placeholder syntax in regular strings
// @see http://eslint.org/docs/rules/no-template-curly-in-string
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.es(6) ? warn() : off();
