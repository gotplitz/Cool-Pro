const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  projectname: {
    type: String
  },
  rangeone: {
    type: Date,
    default: Date.now
  },
  rangetwo: {
    type: Date,
    default: Date.now
  },
  details: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  phonenumber: {
    type: String
  },
  email: {
    type: String
  },
  photo: {
    type: String
  },
  responses: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      response: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      photo: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Quote = mongoose.model('quote', QuoteSchema);
