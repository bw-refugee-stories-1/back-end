const db = require('../data/db.js');

// CRUD FUNCTIONS

// 1. READ
function getStories(){
    return db('stories')
}

// 2. READ
function getStoriesByID(id){
    return db('stories')
    .where({ id: id })
    .first();
}


// 3. CREATE
function insert(story) {
    return db('stories')
      .insert(story)
      .then(ids => ({ id: ids[0] }));
  }

// 4. READ => USED IN CREATE ROUTER
function findById(id) {
    return db('stories')
      .where({ id: Number(id) })
      .first();
  }

// 5. DELETE 
  function remove(id) {
    return db('stories')
      .where('id', Number(id))
      .del();
  }

//   6. UPDATE
  function update(id, story) {
    return db('stories')
      .where('id', Number(id))
      .update(story);
  }

module.exports = {
    getStories,
    getStoriesByID,
    insert,
    findById, 
    remove,
    update
}