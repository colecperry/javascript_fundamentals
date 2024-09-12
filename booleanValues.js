// In JavaScript, the following values are falsy:
Boolean(false);
// => false

Boolean(null);
// => false

Boolean(undefined);
// => false

Boolean(0);
// => false

Boolean(NaN);
// => false

Boolean('');
// => false

// The following values are truthy:

Boolean(true);
// => true

Boolean(42);
// => true

Boolean('Hello, world!');
// => true

Boolean({ firstName: 'Brendan', lastName: 'Eich' });
// => true