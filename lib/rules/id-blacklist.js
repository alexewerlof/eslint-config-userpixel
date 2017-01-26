'use strict';

//--------------------------------------------------------------------------------------------------
// disallow specified identifiers
// @see http://eslint.org/docs/rules/id-blacklist
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

const idNameBlackList = [
  'cb',
  'require',
  'define',
  'set',
  'get'
];

module.exports = () => warn(...idNameBlackList);
