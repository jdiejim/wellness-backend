module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/wellness',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true,
  }
};
