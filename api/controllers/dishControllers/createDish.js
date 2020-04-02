module.exports = function (req, res) {
  const validationFields = ['name', 'price', 'category_id'];

  validationFields.forEach((f) => {
    if (!f in req.body) {
      res.status(403).json({ error: "Some fields are missing" });
      return;

    }
  });

  db.query(
    'INSERT INTO dishes(name, price, category_id) VALUES($1, $2, $3) RETURNING *',
    [req.body.name, req.body.price, req.body.category_id]
  ).then(data => {
    res.status(201).json(data.rows[0]);
  }).catch(err => {
    console.log(err.stack);
    res.status(500);
  }).finally(() => {
  });
}
