'use strict';

//--------------------------------------------------------------------------------------------------
// disallow specified modules when loaded by `import`
// @see http://eslint.org/docs/rules/no-restricted-imports
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.es(6) ? error() : off();
