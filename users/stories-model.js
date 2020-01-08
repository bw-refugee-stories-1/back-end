const db = require('../data/db.js');

function postStory(story){
    return db('stories')
    .insert(story)
    .then(text => {
        return text[0];
    })

}

function insert(story) {
    return db('stories')
      .insert(story)
      .then(ids => ({ id: ids[0] }));
  }

  

function getStories(){
    return db('stories')
}

function getStoriesByID(id){
    return db('stories')
    .where({ id: id })
    .first();
}

//   function findById(id) {
//     return db('stories')
//         .where({id})
//         .first()
// }

function findById(id) {
    return db('stories')
      .where({ id: Number(id) })
      .first();
  }

  function remove(id) {
    return db('stories')
      .where('id', Number(id))
      .del();
  }

module.exports = {
    postStory,
    getStories,
    getStoriesByID,
    insert,
    findById, 
    remove
}