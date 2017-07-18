const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const md5 = require('md5');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Wellness Game';
app.locals.secrets = {
  '0': 'I am zero'
};

app.get('/', (req, res) => {
  res.send('hello')
});

app.get('/api/secrets', (req, res) => {
  const secrets = app.locals.secrets;

  res.json({ secrets });
})

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const message = app.locals.secrets[id];

  if (!message) {
    return res.sendStatus(404);
  }

  res.json({ id, message });
});

app.post('/api/secrets', (req, res) => {
  const { secret } = req.body;
  const id = md5(secret);

  if (!secret) {
    return res.status(404).send({ error: 'No message provided' });
  }

  app.locals.secrets[id] = secret;

  res.status(201).json({ id, secret })
});

app.delete('/api/secrets', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(404).send({ error: 'No id provided' });
  }

  delete app.locals.secrets[id];

  res.status(201).send({ id });
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
});
