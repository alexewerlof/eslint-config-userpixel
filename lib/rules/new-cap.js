'use strict';

//--------------------------------------------------------------------------------------------------
// require constructor names to begin with a capital letter
// @see http://eslint.org/docs/rules/new-cap
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error({
  newIsCap: true,
  capIsNew: false
});
