const router = require('express').Router();
const stories = require('./stories-model.js');

// CRUD ROUTERS

// 1. READ
router.get('/', (req, res) => {

    stories.getStories()
    .then(story => {
        res.status(200).json(story);

    })   

})

// 2. READ
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


  // 3. CREATE + READ
  router.post('/api/stories', (req, res) => {
    console.log(req.body);

    const { img_url, author, email, title, text } = req.body;
    if (!email || !text) {
      res.status(400).json({error: "Requires author and email"});
    } else {
      stories.insert({ img_url, author, email, title, text })
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


  // 4. DELETE
  router.delete('/api/delete/:id', (req, res) => {
    const { id } = req.params;
    stories.remove(id)
      .then(deleted => {
        console.log(deleted);
        if (deleted) {
          // res.status(204).end();
          res.status(202).send(req.params.id)
        } else {
          res.status(404).json({error: "story with ID does not exist"});
        }
        
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({error: "server error deleting"});
      });
  });


  // 5. UPDATE
  router.put('/api/story/:id', (req, res) => {
    const { id } = req.params;
    const { author, email, title, text, approved } = req.body;
    if (!approved) {
      
      return res.status(400).json({error: 'Requires some changes'});
    }
    stories.update(id, { author, email, title, text, approved })
      .then(updated => {
        if (updated) {
          stories.findById(id)
            .then(story => res.status(200).json(story))
            .catch(err => {
              console.log(err);
              res.status(500).json({error: 'Error retrieving story'});
            });
        } else {
          res.status(404).json({error: `story with id ${id} not found`});
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({error: 'Error updating story'});
      });
  });



module.exports = router;