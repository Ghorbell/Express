
const workinghours = (req, res, next) => {
  let date = new Date();
  let days = date.getDay();
  let hours = date.getHours();
  if (days == 0 || days == 5 || hours < 9 || hours > 17) {
    res.sendFile("closed.html", { root: __dirname });
  } else {
    next();
  }
};

module.exports = workinghours;
