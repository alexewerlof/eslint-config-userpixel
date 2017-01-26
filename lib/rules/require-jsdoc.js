'use strict';

//--------------------------------------------------------------------------------------------------
// require JSDoc comments
// @see http://eslint.org/docs/rules/require-jsdoc
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = settings => settings.jsdoc() ? warn({
  // eslint-disable-next-line id-blacklist
  require: {
    FunctionDeclaration: true,
    MethodDefinition: false,
    ClassDeclaration: false,
    ArrowFunctionExpression: false
  }
}) : off();
