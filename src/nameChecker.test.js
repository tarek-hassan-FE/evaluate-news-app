const {checkForName} = require('./client/js/nameChecker');

test('www is not valid', () => {
  expect(checkForName('www')).toBe(false);
});


test('1 is not valid', () => {
  expect(checkForName('1')).toBe(false);
});

test('https://fs.blog/learning/ is not valid', () => {
  expect(checkForName('Hello world')).toBe(false);
});

test('https://fs.blog/learning/ is not valid', () => {
  expect(checkForName('https://fs.blog/learning/')).toBe(true);
});