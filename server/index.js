const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routers/apiRouter');
const sessionRouter = require('./routers/sessionRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3001);
app.locals.title = 'Wellness Game';

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/', (req, res) => res.send('hello'));

app.use('/api/v1', apiRouter);

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
});
