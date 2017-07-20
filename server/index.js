const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./apiRouter');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Wellness Game';

app.get('/', (req, res) => res.send('hello'));

app.use('/api/v1', router);

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
});
