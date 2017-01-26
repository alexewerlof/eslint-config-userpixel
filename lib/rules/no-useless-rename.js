'use strict';

//--------------------------------------------------------------------------------------------------
// disallow renaming import, export, and destructured assignments to the same name
// @see http://eslint.org/docs/rules/no-useless-rename
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// eslint-disable-next-line no-confusing-arrow
module.exports = settings => settings.es6Modules() ? error({
  ignoreDestructuring: false,
  ignoreImport: false,
  ignoreExport: false
}) : off();
