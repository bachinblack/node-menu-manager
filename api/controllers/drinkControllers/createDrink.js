module.exports = function (req, res) {

  const validationFields = ['name', 'price', 'category_id', 'booze', 'size'];

  validationFields.forEach((f) => {
    if (!f in req.body) {
      res.status(403).json({ error: "Some fields are missing" });
      return;
    }
  });

  db.query(
    'INSERT INTO drinks(name, price, booze, size, category_id) VALUES($1, $2, $3, $4, $5) RETURNING *',
    [req.body.name, req.body.price, req.body.booze, req.body.size, req.body.category_id]
  ).then(data => {
    res.status(201).send(data.rows[0]);
  }).catch(err => {
    console.log(err.stack);
    res.status(500);
  }).finally(() => {
  });
}
