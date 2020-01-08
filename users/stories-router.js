const router = require('express').Router();
const stories = require('./stories-model.js');


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
        res.status(500).json({error: "The story information could not be retrieved."});
      });
  });


    
  router.post('/api/stories', (req, res) => {
    console.log(req.body);

    const { author, email, title, text } = req.body;
    if (!email || !text) {
      res.status(400).json({error: "Requires author and email"});
    } else {
      stories.insert({ author, email, title, text })
        .then(({ id }) => {
          stories.findById(id)
            .then(story => {
              res.status(201).json(story);
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({error: "server error retrieving story"});
            });
        })
        }
  });

  router.delete('/api/delete/:id', (req, res) => {
    const { id } = req.params;
    stories.remove(id)
      .then(deleted => {
        console.log(deleted);
        if (deleted) {
          res.status(204).end();
        } else {
          res.status(404).json({error: "story with ID does not exist"});
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({error: "server error deleting"});
      });
  });



module.exports = router;