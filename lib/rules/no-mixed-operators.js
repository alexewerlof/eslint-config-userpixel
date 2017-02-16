'use strict';

//--------------------------------------------------------------------------------------------------
// disallow mixed binary operators
// @see http://eslint.org/docs/rules/no-mixed-operators
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  groups: [
    // These settings are there to mainly check for typos
    // We assume the developer knows how to use operator precedence properly
    // Currently not supported as of eslint 3.15.0 [ '+', '++' ],
    // Currently not supported as of eslint 3.15.0 [ '-', '--' ],
    [ '*', '**' ],
    [ '&', '&&' ],
    [ '|', '||' ],
    [ '>', '>>', '>>>' ],
    [ '<', '<<' ]
  ],
  allowSamePrecedence: true
});
