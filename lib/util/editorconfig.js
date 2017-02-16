'use strict';

const { readFileSync } = require('fs');

function normalizeValue(value, key) {
  switch (key) {
    case 'root':
    case 'insert_final_newline':
      // If the string is not "true" (case insensitive) it's considered false
      return (/true/i).test(value);
    case 'indent_size':
      // May return NaN if the number is not parsable
      return Number(value);
    default:
      // The every other value is returned untouched
      return value;
  }
}

function parseKeyValue(accumulator, line) {
  const equalIndex = line.indexOf('=');
  if (equalIndex !== -1) {
    const key = line.substring(0, equalIndex).trim();
    const value = line.substring(equalIndex + 1).trim();
    accumulator[key] = normalizeValue(value, key);
  }
}

function readLines(filePath) {
  return readFileSync(filePath).split('\n');
}

function isCommentOrEmpty(line) {
  const trimmedLine = line.trim();
  return trimmedLine.indexOf('#') === 0 || trimmedLine === '';
}

function parseSectionName(line) {
  const trimmedLine = line.trim();
  if (trimmedLine.startsWith('[') && trimmedLine.endsWith(']')) {
    return trimmedLine.substring(1, trimmedLine.length - 2);
  }
  return undefined;
}

function findSections(lines) {
  const sections = {};
  let currentSection = '';
  lines.forEach((line) => {
    if (!Array.isArray(sections[currentSection])) sections[currentSection] = {};
    if (isCommentOrEmpty(line)) return;
    const potentialSectionName = parseSectionName(line);
    if (potentialSectionName) {
      currentSection = potentialSectionName;
      return;
    }
    parseKeyValue(sections[currentSection], line);
  });
  return sections;
}

function parseEditorconfig(filePath) {
  return findSections(readLines(filePath));
}

module.exports = { parseEditorconfig, findSections };
