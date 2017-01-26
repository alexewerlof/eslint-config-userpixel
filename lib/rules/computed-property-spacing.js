'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing inside computed property brackets
// @see http://eslint.org/docs/rules/computed-property-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn('never');
