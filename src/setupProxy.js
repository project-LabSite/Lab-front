// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://scholar.google.co.kr",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log("Proxying request:", req.url);
      },
      onError: (err, req, res) => {
        console.error("Proxy error:", err);
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Something went wrong with the proxy.");
      },
    })
  );
};
