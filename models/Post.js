const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  featuredimg: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  postintro: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  photo: {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      cstatus: {
        type: Boolean,
      },
      comment: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      photo: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model('post', PostSchema);
