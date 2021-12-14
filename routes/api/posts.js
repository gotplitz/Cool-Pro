const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/Users');

// @route       POST api/posts
// @description Create a post
// @access      Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is required')
        .not()
        .isEmpty(),
      check('postintro', 'Introduction is required')
        .not()
        .isEmpty(),
      check('content', 'Content is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = new Post({
        featuredimg: req.body.featuredimg,
        title: req.body.title,
        postintro: req.body.postintro,
        content: req.body.content,
        photo: user.photo,
        name: user.name,
        user: req.user.id
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.messsage);
      res.status(500).send('Server Error in post creation');
    }
  }
);

// @route       GET api/posts
// @description Get all posts
// @access      Public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.messsage);
    res.status(500).send('Server Error getting posts');
  }
});

// @route       GET api/posts/:id
// @description Get post by ID
// @access      Public
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post Not Found' });
    }

    res.json(post);
  } catch (err) {
    console.error(err.messsage);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post Not Found' });
    }
    res.status(500).send('Server Error getting posts');
  }
});

// @route       DELETE api/posts/:id
// @description Delete a post
// @access      Public
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: ' Post not found' });
    }

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await post.remove();

    res.json({ msg: 'Post Removed' });
  } catch (err) {
    console.error(err.messsage);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: ' Post not found' });
    }
    res.status(500).send('Server Error deleting posts');
  }
});

// @route       PUT api/posts/like/:id
// @description Like a post
// @access      Private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: 'Post already liked by you' });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.messsage);
    res.status(500).send('Server error when like');
  }
});

// @route       PUT api/posts/unlike/:id
// @description Like a post
// @access      Private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }

    // Get remove index
    const removeIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.messsage);
    res.status(500).send('Server error when like');
  }
});

// @route       POST api/posts/comment/:id
// @description Comment on a post
// @access      Private
router.post(
  '/comment/:id',
  [
    auth,
    [
      check('comment', 'Text comment is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const post = await Post.findById(req.params.id);

      const newComment = {
        cstatus: req.body.cstatus,
        comment: req.body.comment,
        photo: user.photo,
        name: user.name,
        user: req.user.id
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.messsage);
      res.status(500).send('Server Error in comments');
    }
  }
);

// @route       POST api/posts/review-commment/:id/:comment_id
// @description Update a comment
// @access      Private
router.put(
  '/review-commment/:id/:commentid',
  [
    auth,
    [
      check('comment', 'Text comment is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cstatus, comment, photo, name, user } = req.body;

    const commentFields = {};
    if (cstatus) commentFields.cstatus = cstatus;
    if (comment) commentFields.comment = comment;
    if (photo) commentFields.photo = photo;
    if (name) commentFields.name = name;
    if (user) commentFields.user = user;

    try {
      const post = await Post.findById(req.params.id);

      // Pull out comment
      const comment = post.comments.find(
        comment => comment.id === req.params.commentid
      );

      // Pull out comment
      const commentIndex = post.comments.findIndex(
        comment => comment.id === req.params.commentid
      );

      // Make sure comment exist
      if (!comment) {
        return res.status(404).json({ msg: 'Comment does not exist' });
      }

      post.comments.splice(commentIndex, 1, commentFields);

      await post.save();
      res.json(post.comments);
    } catch (err) {
      console.error(err.messsage);
      res.status(500).send('Server Error in comments');
    }
  }
);

// @route       DELETE api/posts/comment/:id/:comment_id
// @description Delete comment
// @access      Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Pull out comment
    const comment = post.comments.find(
      comment => comment.id === req.params.comment_id
    );

    // Make sure comment exist
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'User not authorizaed' });
    }

    // Get remove index
    const removeIndex = post.comments
      .map(comment => comment.user.toString())
      .indexOf(req.user.id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.error(err.messsage);
    res.status(500).send('Server Error in deleting comment');
  }
});

module.exports = router;
