const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const SUPER_SECRET_CODE = '1234';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.get("/check/:code", (req, res) => {
  const code = req.params.code;
  if (code === SUPER_SECRET_CODE) {
    console.log('Code is correct!');
    res.json({ result: "OK" });
  } else {
    console.log('Wrong code.');
    res.json({ result: "Wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});