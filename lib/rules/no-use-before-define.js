'use strict';

//--------------------------------------------------------------------------------------------------
// disallow the use of variables before they are defined
// @see http://eslint.org/docs/rules/no-use-before-define
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error({
  functions: false,
  classes: true
});
