const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  existingclient: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  aboutyou: {
    type: String
  },
  typeofservices: {
    type: String
  },
  yourinterests: {
    type: [String],
    required: true
  },
  address: [
    {
      identification: {
        type: String,
        required: true
      },
      street: {
        type: String,
        required: true
      },
      streettwo: {
        type: String
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        require: true
      },
      zipcode: {
        type: Number,
        require: true
      }
    }
  ],
  product: [
    {
      brand: {
        type: String,
        required: true
      },
      model: {
        type: String,
        required: true
      },
      serial: {
        type: String
      },
      purchasedate: {
        type: Date,
        default: Date.now
      },
      whereis: {
        type: String
      }
    }
  ],
  social: {
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    twitter: {
      type: String
    },
    linkedin: {
      type: String
    },
    youtube: {
      type: String
    },
    behance: {
      type: String
    },
    slack: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
