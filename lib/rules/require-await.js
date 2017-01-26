'use strict';

//--------------------------------------------------------------------------------------------------
// disallow async functions which have no `await` expression
// @see http://eslint.org/docs/rules/require-await
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = (settings) => settings.es(6) ? error() : off();
