'use strict';

//--------------------------------------------------------------------------------------------------
// enforce consistent indentation
// @see http://eslint.org/docs/rules/indent
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

// TODO read from editorconfig
module.exports = () => warn(2, {
  SwitchCase: 1,
  VariableDeclarator: 1,
  outerIIFEBody: 1,
  FunctionDeclaration: {
    parameters: 1,
    body: 1
  },
  FunctionExpression: {
    parameters: 1,
    body: 1
  }
});
