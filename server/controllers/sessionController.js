const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const db = require('knex')(configuration);
const { UserLogin } = require('../../model/UserLogin');

function getUsers(req, res, next) {
  db('users').select()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json({ error }));
}

function signIn(req, res, next) {
  const { email, password } = req.body;

  db('users').where({ email, password }).select()
    .then(data => {
      const user = new UserLogin(data[0]);

      res.status(200).json({ user });
    })
    .catch(error => res.status(500).json({ error }));
}

function singUp(req, res, next) {
  const user = req.body;

  db('users').insert(user, ['id', 'first_name', 'last_name', 'email', 'avatar'])
    .then(data => {
      const user = new UserLogin(data[0]);

      res.status(200).json({ user })
    })
    .catch(error => res.status(500).json({ error }));
}


module.exports = { getUsers, singUp, signIn };
