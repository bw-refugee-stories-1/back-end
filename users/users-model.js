const db = require('../data/db.js');

// OUR USER IS THE EDITOR FOR STORIES POSTED TO THE SITE



function insert(user){

  return db('users')
    .insert(user, `id`)
    .then(([id]) => id);

}

function findBy(where){
    return db('users').where(where);
}

function findByUsername(username){
    return findBy({ username }).first();
}

function find(){
    return db('users')
}



module.exports = {
    insert,
    findBy,
    findByUsername,
    find
    
}