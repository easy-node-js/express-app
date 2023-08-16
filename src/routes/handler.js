module.exports = (action) => (req, res, next) =>
  Promise.resolve(action(req, res))
    .then((result) => {
      if (result) {
        res.json(result);
      }
    })
    .catch(next);
