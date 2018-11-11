import { foo } from '@test-monorepo/foo';
import { bar } from '@test-monorepo/bar';

export function foobar() {
  return foo() + ' ' + bar();
}