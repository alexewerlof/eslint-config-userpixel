'use strict';

//--------------------------------------------------------------------------------------------------
// enforce the consistent use of either backticks, double, or single quotes
// @see http://eslint.org/docs/rules/quotes
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('single', { allowTemplateLiterals: true });
