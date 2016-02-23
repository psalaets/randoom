var test = require('tape');
var randoom = require('./');

test('always works', function(t) {
  t.plan(Infinity);
  
  while (true) t.equal(randoom(), 0);
});
