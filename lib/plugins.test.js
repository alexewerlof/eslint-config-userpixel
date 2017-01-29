'use strict';

const { hasPrefix, pluginShortName, pluginLongName } = require('./plugins');
const { expect } = require('chai');

describe('hasPrefix()', () => {
  it('returns true if plugin name starts with "eslint-plugin-"', () => {
    expect(hasPrefix('eslint-plugin-node')).to.be.true;
  });
  it('returns false if plugin name does not start with "eslint-plugin-"', () => {
    expect(hasPrefix('node')).to.be.false;
  });
});

describe('pluginShortName()', () => {
  it('returns plugin name if it does not already start with "eslint-plugin-"', () => {
    expect(pluginShortName('node')).to.equal('node');
  });
  it('removes "eslint-plugin-" if the plugin name starts with it', () => {
    expect(pluginShortName('eslint-plugin-node')).to.equal('node');
  });
});

describe('pluginLongName()', () => {
  it('returns plugin name if it already starts with "eslint-plugin-"', () => {
    expect(pluginLongName('eslint-plugin-node')).to.equal('eslint-plugin-node');
  });
  it('adds "eslint-plugin-" if it is missing', () => {
    expect(pluginLongName('node')).to.equal('eslint-plugin-node');
  });
});
