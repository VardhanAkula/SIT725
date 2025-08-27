const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Birds route: list of birds will be shown here.');
});

module.exports = router;