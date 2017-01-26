'use strict';

//--------------------------------------------------------------------------------------------------
// enforce a maximum line length
// @see http://eslint.org/docs/rules/max-len
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn({
  code: 100,
  comments: 100,
  tabWidth: 2,
  ignoreUrls: true,
  ignoreStrings: true,
  ignorePattern: '^//  ',
  ignoreComments: true,
  ignoreRegExpLiterals: true,
  ignoreTrailingComments: false,
  ignoreTemplateLiterals: true
});
