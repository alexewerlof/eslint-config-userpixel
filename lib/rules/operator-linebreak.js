'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent linebreak style for operators
// @see http://eslint.org/docs/rules/operator-linebreak
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('after', { overrides: { ':': 'before' } });
