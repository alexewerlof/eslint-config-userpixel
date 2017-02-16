'use strict';

const { expect } = require('chai');
const { findSections } = require('./editorconfig');

// This is the editorconfig sample from http://editorconfig.org/
const SamleEditorconfig = `# EditorConfig is awesome: http://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js,py}]
charset = utf-8

# 4 space indentation
[*.py]
indent_style = space
indent_size = 4

# Tab indentation (no size specified)
[Makefile]
indent_style = tab

# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2

# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2`;

describe('editorconfig', () => {
  describe('findSections()', () => {
    it('the right object for a valid editorconfig file', () => {
      const expectedResult = {
        '': {
          root: true
        },
        '*': {
          end_of_line: 'lf',
          insert_final_newline: true
        },
        '*.{js,py}': {
          charset: 'utf-8'
        },
        '*.py': {
          indent_style: 'space',
          indent_size: 4
        },
        Makefile: {
          indent_style: 'tab'
        },
        'lib/**.js': {
          indent_style: 'space',
          indent_size: 2
        },
        '{package.json,.travis.yml}': {
          indent_style: 'space',
          indent_size: 2
        },
      };
      expect(findSections(SamleEditorconfig.split('\n'))).to.equal(expectedResult);
    });
  });
});