'use strict';

//--------------------------------------------------------------------------------------------------
// require empty lines around comments
// @see http://eslint.org/docs/rules/lines-around-comment
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  beforeBlockComment: false,
  afterBlockComment: false,
  beforeLineComment: false,
  afterLineComment: false,
  allowBlockStart: true,
  allowBlockEnd: true,
  allowObjectStart: true,
  allowObjectEnd: true,
  allowArrayStart: true,
  allowArrayEnd: true
});
