module.exports = function (req, res) {
  if (!('name' in req.body)) {
    res.status(403).json({ error: "Some fields are missing" });
    return;
  }

  db.query(
    'INSERT INTO categories(name, note) VALUES($1, $2) RETURNING *',
    [req.body.name, req.body.note || ""]
  ).then(data => {
    // console.log(data)
    res.status(201).json(data.rows[0]);
  }).catch(err => {
    console.log(err.stack);
    res.status(500);
  }).finally(() => {
  });
}
