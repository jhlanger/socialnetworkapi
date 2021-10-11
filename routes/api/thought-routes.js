const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtsById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controller');


router
    .route('/')
    .get(getAllThoughts)

router
    .route('/:userId')
    .post(addThought);


router
    .route('/:thoughtId')
    .get(getThoughtsById)
    .put(updateThought)
    .delete(deleteThought);




router
  .route('/:thoughtId/reactions')
  .post(addReaction);
  


router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;