// webpack.config.js
module.exports = {
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        // Your custom middleware logic here
        // e.g., middlewares.push(...);
        
        return middlewares;
      },
    }
  };
  