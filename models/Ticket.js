const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  tickettitle: {
    type: String
  },
  purchasedate: {
    type: Date,
    default: Date.now
  },
  equipmentbrand: {
    type: String,
    required: true
  },
  ticketdetails: {
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
  discussions: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      discussion: {
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

module.exports = Ticket = mongoose.model('ticket', TicketSchema);
