function daysIndex(req, res) {
  res.json(req.currentUser.days);
}

function daysShow(req, res) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  res.json(day);
}

module.exports = {
  index: daysIndex,
  show: daysShow
};
