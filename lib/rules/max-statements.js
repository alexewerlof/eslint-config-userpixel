'use strict';

//--------------------------------------------------------------------------------------------------
// enforce a maximum number of statements allowed in function blocks
// @see http://eslint.org/docs/rules/max-statements
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn(50, { ignoreTopLevelFunctions: false });
