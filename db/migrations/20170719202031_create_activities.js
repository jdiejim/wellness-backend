exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('activities', table => {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.string('description');
      table.boolean('completed').defaultTo(false);
      table.enu('type', ['rest', 'sweat', 'nutrition', 'personal']);
      table.string('date');
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activities');
};
