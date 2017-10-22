process.env.NODE_ENV = 'production';

const rm = require('rimraf');
const path = require('path');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config.js');

rm(
  // Clear out build-directory
  path.join(__dirname, 'build/**'),
  (rmErr) => {
    if (rmErr) throw rmErr;

    webpack(webpackConfig, (err, stats) => {
      if (err) throw err;

      // Log hash of sprite-chunk
      const { chunks } = stats.compilation;
      const spriteChunk = chunks.find(c => c.files.some(n => n.includes('.svg')));
      const spriteChunkHash = spriteChunk.name.split('.')[1];
      console.log('Build complete. Sprite hash is ' + spriteChunkHash + '\n');
    });
  }
);
