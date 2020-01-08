
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username').unique().notNullable();
        tbl.string('password').notNullable();
    })

        .createTable('stories', tbl => {
            tbl.increments('id');
            tbl.string('author');
            tbl.string('email').notNullable();
            tbl.string('title');
            tbl.string('text').notNullable();
            tbl.string('approved');

        })

        .createTable('approve_stories', tbl => {
            tbl.increments();            
        } )
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('approve_stories')  
    .dropTableIfExists('stories')
    .dropTableIfExists('users');
};
