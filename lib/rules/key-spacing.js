'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent spacing between keys and values in object literal properties
// @see http://eslint.org/docs/rules/key-spacing
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  beforeColon: false,
  afterColon: true,
  mode: 'minimum'
});
