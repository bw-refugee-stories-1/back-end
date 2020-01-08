const router = require('express').Router();
const stories = require('./stories-model.js');
const db = require('../data/db.js')

router.get('/', (req, res) => {

    stories.getStories()
    .then(story => {
        res.status(200).json(story);

    })   

})


router.get('/:id', (req, res) => {

    const { id } = req.params;
  stories.getStoriesByID(id)
    .then(story => {
        console.log("story", story);
        if (story) {
          res.status(200).json(story);
        } else {
          res.status(404).json({error: "The story with the specified ID does not exist."});
        }
    })

    .catch(err => {
        console.log(err);
        res.status(500).json({error: "The user information could not be retrieved."});
      });
  });


    
//   router.post('/', (req, res) => {
//     const { email, text} = req.body;
//     if (!email || !text){
//         return res.status(400).json({err: "need email and content"});
//     }
//     db.insert({email, text})
    
//     .then(id => res.status(200).json(id));
// });



module.exports = router;