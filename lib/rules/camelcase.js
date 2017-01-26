'use strict';

//--------------------------------------------------------------------------------------------------
// enforce camelcase naming convention
// @see http://eslint.org/docs/rules/camelcase
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error({ properties: 'never' });
