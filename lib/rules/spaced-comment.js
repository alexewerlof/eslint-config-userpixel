'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing after the `//` or `/*` in a comment
// @see http://eslint.org/docs/rules/spaced-comment
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('always', {
  exceptions: [
    '!.*', // shebang
    '-',
    '+',
    'eslint-disable',
    'global',
    'eslint',
    'eslint-env'
  ]
});
