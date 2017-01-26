'use strict';

//--------------------------------------------------------------------------------------------------
// enforce the consistent use of either double or single quotes in JSX attributes
// @see http://eslint.org/docs/rules/jsx-quotes
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = settings => settings.parserOptions.ecmaFeatures.jsx ? warn('prefer-double') : off();
