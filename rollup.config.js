import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'library/bundle.ts',
  output: {
    file: 'dist/javastips.js',
    format: 'iife',
    name: 'javastips'
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      clean: true
    })
  ]
}
