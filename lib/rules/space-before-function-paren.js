'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing before `function` definition opening parenthesis
// @see http://eslint.org/docs/rules/space-before-function-paren
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  anonymous: 'always',
  named: 'never',
  asyncArrow: 'always'
});
