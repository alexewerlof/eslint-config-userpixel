'use strict';

//--------------------------------------------------------------------------------------------------
// enforce placing object properties on separate lines
// @see http://eslint.org/docs/rules/object-property-newline
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({ allowMultiplePropertiesPerLine: true });
