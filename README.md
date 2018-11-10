# test-expo-monorepo
Test monorepository that includes a react-native/expo project

This has several packages underneath `packages/`, each of which is a yarn workspace.

* `packages/foo` (a.k.a. `@test-repo/foo`): CommonJS, exports a single function, `foo`, no dependencies
* `packages/bar` (a.k.a. `@test-repo/bar`): CommonJS, exports a single function, `bar`, no dependencies
* `packages/foobar` (a.k.a. `@test-repo/foobar`): CommonJS, exports a single function, `foobar`, that is based off the result of `foo()` and `bar()`
* `packages/my-rn-project` (a.k.a. `@test-repo/my-rn-project`): ECMAScript modules, Expo SDK 31 project that uses `foobar()`

If you don't have `expo-cli` installed yet, run `yarn global install expo-cli`

To try this out, run `yarn install` at the root of this repository

Then run `cd packages/my-rn-project` to go to the React Native/Expo project

Then run `yarn start`

From there, everything should work like an otherwise normal Expo project.
