'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow spacing around the `*` in `yield*` expressions
// @see http://eslint.org/docs/rules/yield-star-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? warn('after') : off();
