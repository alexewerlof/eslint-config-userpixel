'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unused variables
// @see http://eslint.org/docs/rules/no-unused-vars
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error({
  vars: 'local',
  args: 'after-used'
});
