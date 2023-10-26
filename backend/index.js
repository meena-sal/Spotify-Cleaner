const express = require('express');
const cors = require('cors');

const app = express();
const port = 5001; 


app.use(cors());


app.get('/getData', (req, res) => {
  res.send("Hello!");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});