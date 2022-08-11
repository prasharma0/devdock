const express = require('express');
const app = express();
let SumHi = 0;

app.get('/', (req, res) => {
  SumHi += 1;
  res.send(`<h1>Hi!</h1> Visitor no: ${SumHi}`);
});
app.get('/:name', (req, res) => {
  SumHi += 1;
  res.send(`<h1>Hi ${req.params['name']}!</h1>Visitor no: ${SumHi}`);
});
let port = 3000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
