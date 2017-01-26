'use strict';

//--------------------------------------------------------------------------------------------------
// disallow mixed binary operators
// @see http://eslint.org/docs/rules/no-mixed-operators
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error({
  groups: [
    [ '+', '-', '*', '/', '%', '**' ],
    [ '&', '|', '^', '~', '<<', '>>', '>>>' ],
    [ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
    [ '&&', '||' ],
    [ 'in', 'instanceof' ]
  ],
  allowSamePrecedence: false
});
