import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'development',
  entry: './library/bundle.ts',
  output: {
    path: resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'javastips.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: { target: 'es2015' },
      },
    ],
  },
  stats: { colors: true },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
};
