
module.exports = {
  devServer: {
    host: "localhost",
    port: 2020,
    https: false, 
    open: true, 

    proxy: {
      '/': { // textures
        target: "http://localhost:5050/",
        changeOrigin: true, 
        ws:true,
        pathRewrite: {
            '^/api': '/examples/data' 
          }
      }
    }
  }
}; 