const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

// @route     GET api/calendar/me
// @desc      Get current user's calendar
// @access    Private
router.get('/me', auth, async (req, res) => {
  try {
    const calendar = await Calendar.findOne({
      user: req.user.id,
    });

    if (!calendar) {
      return res
        .status(400)
        .json({ msg: 'There is no calendar for this user' });
    }

    res.json(calendar);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
