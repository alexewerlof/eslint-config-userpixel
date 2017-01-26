'use strict';

/**
 * Spits out an error array suitable for use as eslint rule value
 */
function error(...options) {
  return ['error'].concat(options);
}

/**
 * Spits out a warn array suitable for use as eslint rule value
 */
function warn(...options) {
  return ['warn'].concat(options);
}

/**
 * Spits out an off array suitable for use as eslint rule value
 */
function off(...options) {
  return ['off'].concat(options);
}

module.exports = { error, warn, off };
