var webpack = require('webpack');
var yargs = require('yargs');

var options = yargs
  .alias('p', 'optimize-minimize')
  .argv;

var baseConfig = {
  entry: {
    'react-overlays': './lib/index.js'
  },

  output: {
    path: './dist/',
    filename: options.optimizeMinimize? '[name].min.js' : '[name].js',
    library: 'ReactOverlays',
    libraryTarget: 'umd'
  },

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ]
};

if (options.optimizeMinimize) {
  baseConfig.devtool = 'source-map';
}

module.exports = baseConfig;
