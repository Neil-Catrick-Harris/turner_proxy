const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/products', express.static(path.join(__dirname, 'client', 'dist')));

app.get('/products/*', (req, res) => {
  console.log('testing')
  // axios.get('http://localhost:3000/products/*');
  axios.get('http://localhost:3003/products/*', (req, res) => {
    console.log('inside here')
  }).catch((error) => res.send(error));
});
// make individual server api calls

app.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
})
