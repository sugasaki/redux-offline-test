const bodyParser = require('body-parser') // body-parser
const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());


app.use((_req, _res, next) => setTimeout(next, 400));

app.get('/succeed-always', (_req, res) => {
  res.status(200).json({ some: 'data' });
});


app.post('/succeed-post', (_req, res) => {
  console.log(_req.body.userId);

  res.status(200).json({ some: 'data' });
  //res.status(500).json({ error: 'server' });

  /*
  if (Math.random() < 0.5) {

    res.status(500).json({ error: 'server' });
  } else {
    res.status(200).json({ some: req.body.userId });
  }
  */
});



app.get('/succeed-sometimes', (_req, res) => {
  if (Math.random() < 0.5) {
    res.status(500).json({ error: 'server' });
  } else {
    res.status(200).json({ some: 'data' });
  }
});

app.get('/fail-sometimes', (_req, res) => {
  if (Math.random() < 0.5) {
    res.status(500).json({ error: 'server' });
  } else {
    res.status(400).json({ error: 'client' });
  }
});

app.listen(4000);
