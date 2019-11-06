const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/m",
    proxy({
      target: "https://m.zbj.com",
      changeOrigin: true,
      pathRewrite: {
        "/m": ""
      }
    })
  );
  app.use(
    "/task",
    proxy({
      target: "https://task.zbj.com",
      changeOrigin: true,
      pathRewrite: {
        "/task": ""
      }
    })
  );
};
