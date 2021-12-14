const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/Users');
const Post = require('../../models/Post');

// @route       GET api/profile/me
// @description Get current user's profile
// @access      Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', [
      'name',
      'lastname',
      'companyname',
      'title',
      'phonenumber',
      'email',
      'photo',
      'date',
    ]);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error, Cannot get profile');
  }
});

// @route       POST api/profile
// @description Create or update user profile
// @access      Private
router.post(
  '/',
  [
    auth,
    [
      check('existingclient', 'Client Status').not().isEmpty(),
      check('yourinterests', 'Specify at least one interest').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      existingclient,
      website,
      aboutyou,
      typeofservices,
      yourinterests,
      facebook,
      instagram,
      twitter,
      linkedin,
      youtube,
      behance,
      slack,
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (existingclient) profileFields.existingclient = existingclient;
    if (website) profileFields.website = website;
    if (aboutyou) profileFields.aboutyou = aboutyou;
    if (typeofservices) profileFields.typeofservices = typeofservices;
    if (yourinterests) {
      profileFields.yourinterests = yourinterests
        .split(',')
        .map((yourinterests) => yourinterests.trim());
    }

    // Build Social object
    profileFields.social = {};
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;
    if (twitter) profileFields.social.twitter = twitter;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (youtube) profileFields.social.youtube = youtube;
    if (behance) profileFields.social.behance = behance;
    if (slack) profileFields.social.slack = slack;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // Update profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create Profile
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route       GET api/profile
// @description Get all profiles
// @access      Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', [
      'name',
      'lastname',
      'companyname',
      'title',
      'phonenumber',
      'email',
      'photo',
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       GET api/profile/user/:user_id
// @description Get profile by user ID
// @access      Private
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', [
      'name',
      'lastname',
      'companyname',
      'title',
      'phonenumber',
      'email',
      'photo',
    ]);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route       DELETE api/profile
// @description Delete profile, user & post
// @access      Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    await Post.deleteMany({ user: req.user.id });

    //Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //Remove the user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       PUT api/profile/address
// @description Add profile address
// @access      Private
router.put(
  '/address',
  [
    auth,
    [
      check('identification', 'Identify this address').not().isEmpty(),
      check('street', 'Number and Street are required').not().isEmpty(),
      check('city', 'City is Required').not().isEmpty(),
      check('state', 'State is required').not().isEmpty(),
      check('zipcode', 'Zip code this address').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      identification,
      street,
      streettwo,
      city,
      state,
      zipcode,
    } = req.body;

    const newAdds = {
      identification,
      street,
      streettwo,
      city,
      state,
      zipcode,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.address.unshift(newAdds);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error in address creation');
    }
  }
);

// @route       DELETE api/profile/address/:adds_id
// @description Delete address from profile
// @access      Private
router.delete('/address/:adds_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get the remove index
    const removeIndex = profile.address
      .map((item) => item.id)
      .indexOf(req.params.adds_id);

    profile.address.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error on deleting address');
  }
});

// @route       PUT api/profile/product
// @description Add profile product
// @access      Private
router.put(
  '/product',
  [
    auth,
    [
      check('brand', 'Brand is required').not().isEmpty(),
      check('model', 'Model is required').not().isEmpty(),
      check('purchasedate', 'Purchase date is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { brand, model, serial, purchasedate, whereis } = req.body;

    const newProd = {
      brand,
      model,
      serial,
      purchasedate,
      whereis,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.product.unshift(newProd);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error in product registration');
    }
  }
);

// @route       DELETE api/profile/product/:prod_id
// @description Delete experiencxe from profile
// @access      Private
router.delete('/product/:prod_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get the remove index
    const removeIndex = profile.product
      .map((item) => item.id)
      .indexOf(req.params.prod_id);

    profile.product.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error on unregistering product');
  }
});

module.exports = router;
