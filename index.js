const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 8000;

const proxyProductOptions = createProxyMiddleware({target: 'http://localhost:3000', changeOrigin: true}) // 3000
const proxyBottomCarousel = createProxyMiddleware({target: 'http://localhost:3001', changeOrigin: true}) // 3001
const proxyProductView = createProxyMiddleware({target: 'http://localhost:3002', changeOrigin: true}) // 3002
const proxyReview = createProxyMiddleware({target: 'http://localhost:3003', changeOrigin: true}) // 3003

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', proxyProductOptions)
app.use('/', proxyBottomCarousel)
app.use('/', proxyProductView)
app.use('/', proxyReview)
app.use('/:productId', proxyReview)

app.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
})