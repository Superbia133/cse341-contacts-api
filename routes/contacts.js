const getAll = (req, res) => {
  res.status(200).json({
    message: "GET all contacts",
  });
};

const getSingle = (req, res) => {
  res.status(200).json({
    message: `GET single contact with id ${req.params.id}`,
  });
};

module.exports = {
  getAll,
  getSingle,
};
