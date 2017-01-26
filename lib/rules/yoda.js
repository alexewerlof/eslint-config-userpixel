'use strict';

//--------------------------------------------------------------------------------------------------
// require or disallow "Yoda" conditions
// @see http://eslint.org/docs/rules/yoda
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('never', { onlyEquality: true });
