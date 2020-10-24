# Mykea Proxy Server
This proxy server connects the Product View, Product Options, Reviews, and Similar Products/"Bottom Carousel" for the Mykea app.

To run the proxy server, follow these steps:
- `git clone` the four services above. See each corresponding README for individual instructions.
- Ensure all four services are running on their own ports (3002, 3000, 3003, and 3001, respectively)
- `npm install` dependencies
- `npm start` from the root directory of turner_proxy
- visit [http://localhost:8000](http://localhost:8000) for a default page, or http://localhost:8000/products/:id for a specific product's page (e.g. [http://localhost:8000/products/2](http://localhost:8000/products/2))