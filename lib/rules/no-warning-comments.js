'use strict';

//--------------------------------------------------------------------------------------------------
// disallow specified warning terms in comments
// @see http://eslint.org/docs/rules/no-warning-comments
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  terms: [
    'todo',
    'fixme',
    'tech debt',
    'techdebt',
    'security'
  ],
  location: 'start'
});
