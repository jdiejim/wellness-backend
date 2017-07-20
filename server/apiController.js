const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);

function getUsers(req, res, next) {
  db('users').select()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json({ error }));
}

function getActivities(req, res, next) {
  db('activities').select()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json({ error }));
}

function signIn(req, res, next) {
  const userReq = req.body;

  db('users').where(userReq).select()
    .then(user => res.status(200).json({ id: user[0].id }))
    .catch(error => res.status(500).json({ error }));
}

function postUser(req, res, next) {
  const user = req.body;

  db('users').insert(user, '*')
    .then(user => res.status(200).json({ data: user }))
    .catch(error => res.status(500).json({ error }));
}

function postActivity(req, res, next) {
  const activity = req.body;

  db('activities').insert(activity, '*')
    .then(activity => res.status(200).json({ data: activity }))
    .catch(error => res.status(500).json({ error }));
}

module.exports = { getUsers, getActivities, postUser, postActivity, signIn };
