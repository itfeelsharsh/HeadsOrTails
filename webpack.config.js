const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  // Other webpack configurations
  plugins: [
    new InjectManifest({
      swSrc: './src/service-worker.js', // Path to your custom service worker
      swDest: 'service-worker.js',      // Output destination
    }),
  ],
};
