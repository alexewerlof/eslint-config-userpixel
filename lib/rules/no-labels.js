'use strict';

//--------------------------------------------------------------------------------------------------
// disallow labeled statements
// @see http://eslint.org/docs/rules/no-labels
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  allowLoop: true,
  allowSwitch: true
});
