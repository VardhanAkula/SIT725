const birdservice = require('../services/birdservice');

// Controller uses the service to get data
exports.getAllBirds = (req, res) => {
  const items = birdservice.getAllBirds();
  res.json({
    status: 200,
    data: items,
    message: 'Bird data retrieved using service'
  });
};