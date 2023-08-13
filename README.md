# Vite + Jest Sample

## 概要

Vite + Jest のサンプルを掲載しています。

## 環境構築

```sh
# node のバージョン確認
$ node -v
v18.16.1

# TypeScript がインストールされているか確認
$ tsc -v

# 下記が表示された場合、TypeScript はインストールされていない
zsh: command not found: tsc

# TypeScript をインストール
$ npm install -g typescript

$ tsc -v
Version 5.1.6

# プロジェクト作成
$ npm create vite@latest typescript-jest -- --template react-ts

Done. Now run:

  cd typescript-jest
  npm install
  npm run dev

$ cd typescript-jest
$ npm install


# Jest を動作させるため Babel をインストール
$ npm install --save-dev @babel/preset-typescript

# Babel の設定ファイルを作成
$ vim babel.config.js

module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};


# Jest をインストール
$ npm install --save-dev ts-jest @jest/globals

# ts-jest の初期化(jest.config.js が作成される)
$ npx ts-jest config:init

# Jest の設定ファイルを作成
$ vim package.json

{
	"type": "module",  // <- 削除, エラーになる
  "scripts": {
    "test": "jest",  // <- 追加
  }
}

# テストディレクトリを作成
$ mkdir test

# TypeScript の設定ファイルを修正
$ vim tsconfig.json

  "noUnusedLocals": false, // true -> false

# UI テスト用のライブラリをインストール
$ npm install --save-dev jest-environment-jsdom
$ npm install --save-dev @testing-library/react
$ npm install --save-dev react-test-renderer @types/react-test-renderer

# テスト対象プログラムを作成
$ vim src/sum.ts

export const sum = (a: number, b: number): number =>  {
  return a + b;
}

# テストプログラムを作成
$ vim test/sum.test.ts

import {describe, expect, test} from '@jest/globals';
import {sum} from '../src/sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

# テスト実行
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
