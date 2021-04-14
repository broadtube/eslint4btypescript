//import {terser} from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/index.js',
  output: [{
    file: './dist/eslint4btypescript.es.js',
    format: 'es',
    sourcemap: false,
  },
  {
    file: './dist/eslint4btypescript.umd.js',
    format: 'umd',
    sourcemap: false,
    name: 'Linter',
  }
],
//  plugins: [commonjs(),terser(),nodePolyfills(),nodeResolve({ preferBuiltins: false }),json(),]
  plugins: [babel({ babelHelpers: 'bundled' }),commonjs(),nodePolyfills(),nodeResolve(),json(),]
//  plugins: [nodeResolve()]
};
