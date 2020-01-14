import express from 'express';

let app = express();

let hostname = 'localhost';
let port = 8017;

app.get('/hi', (req, res) => {
  res.send('<h1> HI VPL. 1234 </h1>');
});

app.listen(port, hostname, () => {
  console.log(`Server is running ... at ${hostname}:${port}`);
});
