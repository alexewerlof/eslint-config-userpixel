'use strict';

//--------------------------------------------------------------------------------------------------
// require `var` declarations be placed at the top of their containing scope
// @see http://eslint.org/docs/rules/vars-on-top
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
