'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow padding within blocks
// @see http://eslint.org/docs/rules/padded-blocks
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  blocks: 'never',
  classes: 'always',
  switches: 'never'
});
