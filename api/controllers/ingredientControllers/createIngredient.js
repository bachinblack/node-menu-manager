module.exports = function (req, res) {
  const validationFields = ['name', 'origin', 'bio', 'allergen'];

  validationFields.forEach((f) => {
    if (!f in req.body) {
      res.status(403).json({ error: "Some fields are missing" });
      return;

    }
  });

  db.query(
    'INSERT INTO ingredients(name, origin, bio, allergen) VALUES($1, $2, $3, $4) RETURNING *',
    [req.body.name, req.body.origin, req.body.bio, req.body.allergen]
  ).then(data => {
    res.status(201).send(data.rows[0]);
  }).catch(err => {
    console.log(err.stack);
    res.status(500);
  }).finally(() => {
  });
}
