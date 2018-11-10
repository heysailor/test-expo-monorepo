const { foo } = require('@test-monorepo/foo');
const { bar } = require('@test-monorepo/bar');

exports.foobar = function() {
  return foo() + ' ' + bar();
}