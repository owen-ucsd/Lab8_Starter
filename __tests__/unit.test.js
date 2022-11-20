// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('valid phone number format 1', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number format 2', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number format 1', () => {
  expect(functions.isPhoneNumber('123-4-5')).toBe(false);
});

test('invalid phone number format 2', () => {
  expect(functions.isPhoneNumber('abcde')).toBe(false);
});

test('valid email format 1', () => {
  expect(functions.isEmail('opan@ucsd.edu')).toBe(true);
});

test('valid email format 2', () => {
  expect(functions.isEmail('abcd@efghi.jk')).toBe(true);
});

test('invalid email format 1', () => {
  expect(functions.isEmail('opan@ucsd.e')).toBe(false);
});

test('invalid email format 2', () => {
  expect(functions.isEmail('opan@123.edu')).toBe(false);
});

test('valid strong password format 1', () => {
  expect(functions.isStrongPassword('hunter2')).toBe(true);
});

test('valid strong password format 2', () => {
  expect(functions.isStrongPassword('password123')).toBe(true);
});

test('invalid strong password format 1', () => {
  expect(functions.isStrongPassword('a')).toBe(false);
});

test('invalid strong password format 2', () => {
  expect(functions.isStrongPassword('abcdefghijklmnopqrstuvwxyz')).toBe(false);
});

test('valid date format 1', () => {
  expect(functions.isDate('1/1/2000')).toBe(true);
});

test('valid date format 2', () => {
  expect(functions.isDate('01/01/2000')).toBe(true);
});

test('invalid date format 1', () => {
  expect(functions.isDate('1/1/00')).toBe(false);
});

test('invalid date format 2', () => {
  expect(functions.isDate('1-1-2000')).toBe(false);
});

test('valid hex color format 1', () => {
  expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('valid hex color format 2', () => {
  expect(functions.isHexColor('111')).toBe(true);
});

test('invalid hex color format 1', () => {
  expect(functions.isHexColor('FFFFFFF')).toBe(false);
});

test('invalid hex color format 2', () => {
  expect(functions.isHexColor('#11')).toBe(false);
});
