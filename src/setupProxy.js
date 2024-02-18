// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://13.201.93.229:5000", // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};
