'use strict';

const { normalizePluginName } = require('./rules');
const { expect } = require('chai');

describe('normalizePluginName()', () => {
  it('returns plugin name if it already starts with "eslint-plugin-"', () => {
    expect(normalizePluginName('eslint-plugin-node')).to.equal('eslint-plugin-node');
  });
  it('adds "eslint-plugin-" if it is missing', () => {
    expect(normalizePluginName('node')).to.equal('eslint-plugin-node');
  });
});
