'use strict';

//--------------------------------------------------------------------------------------------------
// disallow arrow functions where they could be confused with comparisons
// @see http://eslint.org/docs/rules/no-confusing-arrow
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// this is kinda ironic wasn't it? ;)
// eslint-disable-next-line no-confusing-arrow
module.exports = settings => settings.es(6) ? warn({ allowParens: true }) : off();
