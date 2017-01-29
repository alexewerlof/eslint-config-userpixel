'use strict';

//--------------------------------------------------------------------------------------------------
// disallow certain properties on certain objects
// @see http://eslint.org/docs/rules/no-restricted-properties
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

const deprecatedStuff = {
  __defineGetter__: 'use Object.defineProperty or simple getters',
  __defineSetter__: 'use Object.defineProperty or simple setters',
  'arguments.caller': 'arguments.caller is deprecated',
  'Date.toGMTString': 'it is deprecated. Use toISOString() instead',
  'Date.getYear': 'it is affected with Y2K error. Use getFullYear() instead',
  'Date.setYear': 'it is affected with Y2K error. Use setFullYear() instead',
  'Number.toInteger': 'it is deprecated'
};

const es6Coolness = {
  'Math.pow': 'you can use ** operator',
  '_.extend': 'you can use native Object.assign() instead',
  '_.clone': 'you can use native Object.assign() instead',
  '_.map': 'you can use native [].map() instead',
  '_.each': 'you can use [].forEach()',
  '_.every': 'you can use [].every()',
  '_.some': 'you can use [].some()',
  '_.find': 'you can use [].find()',
  '_.indexOf': 'you can use [].indexOf()',
  '_.contains': 'you can use [].indexOf()',
  '_.findIndex': 'you can use [].findIndex()',
  '_.includes': 'you can use [].includes()',
  '_.filter': 'you can use native [].filter() instead',
  '_.reduce': 'you can use native [].reduce() instead',
  '_.reduceRight': 'you can use [].reduceRight()',
  '_.head': 'you can use const [head] = array instead',
  '_.tail': 'you can use const [...tail] = array instead',
  '_.rest': 'you can use const (...rest) operator in ES6 instead',
  '_.toArray': 'you can use const [...arguments] instead',
  '_.isArray': 'you can use const Array.isArray() instead',
  '_.compact': 'you can use [].filter(x => !!x) instead',
  '_.uniq': 'you can use [...new Set(ARRAY)] instead',
  '_.keys': 'you can use Object.keys() instead',
  '_.size': 'you can use Object.keys().length instead',
  '_.now': 'you can use Date.now() instead',
  '$.clone': 'you can use element !== child && element.contains(child)',
  '$.proxy': 'you can use fn.bind(context)',
  '$.extend': 'you can use Object.assign()',
  '$.inArray': 'you can use [].indexOf()',
  '$.isArray': 'you can use Array.isArray()',
  '$.map': 'you can use [].map()',
  '$.now': 'you can use Date.now()',
  '$.parseJSON': 'you can use JSON.parse(string)',
  '$.trim': 'you can use string.trim()'
};

function normalizeHint(what, message) {
  if (what.indexOf('.') === -1) {
    // no . means only property is present
    return { property: what, message };
  }
  const [ object, property ] = what.split('.');
  return { object, property, message };
}

function normalize(hintsObj) { 
  return Object.keys(hintsObj).map((what) => normalizeHint(what, hintsObj[what]));
}

// eslint-disable-next-line no-confusing-arrow
module.exports = (settings) => settings.es(6) ?
  warn(...normalize(es6Coolness).concat(normalize(deprecatedStuff)))
  : warn(...normalize(deprecatedStuff));
