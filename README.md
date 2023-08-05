# Vite + Jest Sample

```sh
$ node -v
v18.16.1

Scaffolding project in /Users/ryu/Projects/biz/typescript/typescript-jest...

Done. Now run:

  cd typescript-jest
  npm install
  npm run dev

$ cd typescript-jest
$ npm install

# 以下はパスする
$ npm run dev

$ npm install --save-dev @babel/preset-typescript

$ vim babel.config.js

module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};


$ npm install --save-dev ts-jest

# jest.config.js が作成される
$ npx ts-jest config:init

$ npm install --save-dev @jest/globals


$ vim package.json

{
	"type": "module",  // <- 削除, エラーになる
  "scripts": {
    "test": "jest",  // <- 追加
  }
}

$ mkdir test
```

```json
$ vim tsconfig.json

  "noUnusedLocals": false, // true -> false
```

axios

```sh
$ npm install axios
```

```ts
$ vim src/sum.ts

export const sum = (a: number, b: number): number =>  {
  return a + b;
}
```

```ts
$ vim test/sum.test.ts

import {describe, expect, test} from '@jest/globals';
import {sum} from '../src/sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

```sh
$ npm run test

 PASS  test/sum.test.ts
  sum module
    ✓ adds 1 + 2 to equal 3 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.391 s
Ran all test suites.
```
