function daysIndex(req, res) {
  res.json(req.currentUser.days);
}

function daysShow(req, res) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  if(!day) return res.notFound();
  res.json(day);
}

module.exports = {
  index: daysIndex,
  show: daysShow
};
