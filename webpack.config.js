const path = require('path');

module.exports = {
  //...other webpack configurations
  resolve: {
    fallback: {
      "util": require.resolve("util/"),
      "stream": require.resolve("stream-browserify")
    }
  }
};
