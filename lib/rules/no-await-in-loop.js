'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `await` inside of loops
// @see http://eslint.org/docs/rules/no-await-in-loop
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.es(6) ? warn() : off();
